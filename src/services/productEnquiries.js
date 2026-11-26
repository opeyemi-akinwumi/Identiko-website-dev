const apiBase = (
  import.meta.env?.VITE_PRODUCT_API_BASE_URL ||
  "https://product-api.dev.identikosharedsolutions.com"
).replace(/\/+$/, "");

export class EnquiryApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.name = "EnquiryApiError";
    this.status = status;
    this.errors = errors;
  }
}

async function readResponse(response, expectedStatus) {
  let data;
  try {
    data = await response.json();
  } catch {
    throw new EnquiryApiError(
      "The enquiry service returned an unreadable response. Please try again.",
      response.status,
    );
  }
  const validStatus = expectedStatus
    ? response.status === expectedStatus
    : response.status >= 200 && response.status < 300;
  if (!validStatus || data?.code !== "00") {
    throw new EnquiryApiError(
      typeof data?.message === "string"
        ? data.message
        : "The enquiry request failed. Please try again.",
      response.status,
      Array.isArray(data?.errors) ? data.errors : [],
    );
  }
  return data;
}

export async function fetchEnquiryType({ signal } = {}, fetcher = fetch) {
  const response = await fetcher(`${apiBase}/api/v1/enquiry-types`, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });
  const { body: types } = await readResponse(response, 200);
  if (
    !Array.isArray(types) ||
    types.some(
      (type) =>
        !type ||
        typeof type.code !== "string" ||
        !type.code.trim() ||
        typeof type.name !== "string" ||
        !type.name.trim(),
    )
  ) {
    throw new EnquiryApiError(
      "The enquiry service returned invalid enquiry types. Please try again.",
      response.status,
    );
  }
  return types;
}

export function validateEnquiry(values, enquiryTypes) {
  const errors = {};
  const labels = {
    name: "Full name",
    organisation: "Organisation",
    email: "Email address",
    phone: "Phone number",
    enquiryType: "Enquiry type",
    message: "Additional information",
  };
  for (const [field, label] of Object.entries(labels)) {
    if (!values[field]?.trim()) errors[field] = `${label} is required.`;
  }
  if (
    values.email?.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  )
    errors.email = "Enter a valid email address.";
  if (
    values.enquiryType &&
    !enquiryTypes.some((type) => type.code === values.enquiryType)
  )
    errors.enquiryType = "Select an enquiry type.";
  return errors;
}

export function createEnquiryPayload(_product, values) {
  return {
    fullName: values.name.trim(),
    organisation: values.organisation.trim(),
    phoneNumber: values.phone.trim(),
    email: values.email.trim(),
    enquiryTypeCode: values.enquiryType,
    additionalInformation: values.message.trim(),
    website: values.website || "",
  };
}

export async function sendEnquiry(payload, fetcher = fetch) {
  const response = await fetcher(`${apiBase}/api/v1/enquiries`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return readResponse(response);
}
