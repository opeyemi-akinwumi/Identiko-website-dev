import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { planPropType, productPropType } from "./productPropTypes";
import {
  createEnquiryPayload,
  fetchEnquiryType,
  sendEnquiry,
  validateEnquiry,
} from "../../services/productEnquiries";
import { ProductIcon } from "./ProductUI";

const emptyForm = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
  website: "",
};
const apiFields = {
  fullName: "name",
  organisation: "organisation",
  email: "email",
  phoneNumber: "phone",
  enquiryTypeCode: "enquiryType",
  additionalInformation: "message",
};
const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  {
    name: "organisation",
    label: "Organisation",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
  },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
];

export default function ProductEnquiry({
  product,
  selectedPlan,
  onClearPlan,
  formRef,
}) {
  const { sales } = product;
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [enquiryTypes, setEnquiryTypes] = useState([]);
  const [typesStatus, setTypesStatus] = useState("loading");
  const [typesError, setTypesError] = useState("");
  const [submitErrors, setSubmitErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const submitting = useRef(false);
  const typesController = useRef(null);
  const mounted = useRef(false);

  const loadTypes = useCallback(async () => {
    typesController.current?.abort();
    const controller = new AbortController();
    typesController.current = controller;
    setTypesStatus("loading");
    setTypesError("");
    try {
      const types = await fetchEnquiryType({ signal: controller.signal });
      if (controller.signal.aborted) return;
      setEnquiryTypes(types);
      setTypesStatus(types.length ? "ready" : "empty");
      setValues((previous) =>
        types.some((type) => type.code === previous.enquiryType)
          ? previous
          : { ...previous, enquiryType: "" },
      );
    } catch (error) {
      if (controller.signal.aborted) return;
      setTypesStatus("error");
      setTypesError(error.message || "Enquiry types could not be loaded.");
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    loadTypes();
    return () => {
      mounted.current = false;
      typesController.current?.abort();
    };
  }, [loadTypes]);

  function change(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    if (status !== "pending") setStatus("idle");
  }

  async function submit(event) {
    event.preventDefault();
    if (submitting.current || typesStatus !== "ready") return;
    const nextErrors = validateEnquiry(values, enquiryTypes);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      event.currentTarget.elements
        .namedItem(Object.keys(nextErrors)[0])
        ?.focus();
      return;
    }
    submitting.current = true;
    setStatus("pending");
    setSubmitErrors([]);
    setSuccessMessage("");
    try {
      const response = await sendEnquiry(
        createEnquiryPayload(product, values, selectedPlan),
      );
      if (!mounted.current) return;
      setValues(emptyForm);
      onClearPlan();
      setSuccessMessage(response.message || sales.successMessage);
      setStatus("success");
    } catch (error) {
      if (!mounted.current) return;
      const fieldErrors = {};
      for (const detail of error.errors || []) {
        const field =
          detail && Object.hasOwn(apiFields, detail.field)
            ? apiFields[detail.field]
            : undefined;
        if (field && typeof detail.message === "string")
          fieldErrors[field] = detail.message;
      }
      if (error.status === 422) {
        setValues((previous) => ({ ...previous, enquiryType: "" }));
        fieldErrors.enquiryType ||= "Please select an enquiry type again.";
        loadTypes();
      }
      setErrors(fieldErrors);
      const messages = (error.errors || [])
        .map((detail) => typeof detail === "string" ? detail : detail?.message)
        .filter((message) => typeof message === "string" && message.trim());
      setSubmitErrors(messages.length ? messages : [
        error.status === 429
          ? "Too many enquiries have been submitted. Please wait before trying again."
          : error.message || sales.errorMessage,
      ]);
      setStatus("error");
      formRef.current?.elements.namedItem(Object.keys(fieldErrors)[0])?.focus();
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section
      id="contact-sales"
      className="product-section product-muted"
      tabIndex={-1}
    >
      <div className="product-container product-contact-grid">
        <aside className="product-sales-card">
          <p className="product-eyebrow">{sales.label}</p>
          <h2>{sales.title}</h2>
          <p>{sales.description}</p>
          <dl className="product-contact-list">
            {sales.contacts.map((contact) => (
              <div key={contact.id}>
                <span className="product-icon-circle">
                  <ProductIcon name={contact.icon} />
                </span>
                <div>
                  <dt>{contact.label}</dt>
                  <dd>
                    {contact.href ? (
                      <a href={contact.href}>{contact.value}</a>
                    ) : (
                      contact.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </aside>
        <form
          ref={formRef}
          className="product-enquiry"
          onSubmit={submit}
          noValidate
          aria-labelledby="enquiry-title"
          aria-busy={status === "pending"}
        >
          <h2 id="enquiry-title">{sales.formTitle}</h2>
          <p>{sales.formDescription}</p>
          <div className="product-enquiry-honeypot" aria-hidden="true">
            <label htmlFor="enquiry-website">Website</label>
            <input
              id="enquiry-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={change}
            />
          </div>
          {selectedPlan && (
            <p className="product-selected-plan" role="status">
              Selected plan: <strong>{selectedPlan.name}</strong>
              <button
                type="button"
                onClick={onClearPlan}
                disabled={status === "pending"}
              >
                Clear
              </button>
            </p>
          )}
          <fieldset disabled={status === "pending"}>
            <legend className="sr-only">Enquiry details</legend>
            <div className="product-form-grid">
              {fields.map(({ label, ...field }) => (
                <div key={field.name}>
                  <label htmlFor={`enquiry-${field.name}`}>{label}*</label>
                  <input
                    {...field}
                    id={`enquiry-${field.name}`}
                    placeholder={label}
                    required
                    value={values[field.name]}
                    onChange={change}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={
                      errors[field.name] ? `${field.name}-error` : undefined
                    }
                  />
                  {errors[field.name] && (
                    <p
                      className="product-field-error"
                      id={`${field.name}-error`}
                    >
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
              <div className="product-form-full">
                <label htmlFor="enquiry-type">Enquiry type*</label>
                <select
                  id="enquiry-type"
                  name="enquiryType"
                  required
                  disabled={typesStatus !== "ready"}
                  value={values.enquiryType}
                  onChange={change}
                  aria-invalid={!!errors.enquiryType}
                  aria-describedby={`enquiry-types-status${
                    errors.enquiryType ? " enquiryType-error" : ""
                  }`}
                >
                  <option value="" disabled>
                    {typesStatus === "loading"
                      ? "Loading enquiry types…"
                      : "Select an enquiry type"}
                  </option>
                  {enquiryTypes.map((type) => (
                    <option value={type.code} key={type.code}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <div id="enquiry-types-status" aria-live="polite">
                  {typesStatus === "loading" && <p className="text-xs mt-2">Loading enquiry types…</p>}
                  {typesStatus === "empty" && (
                    <p>
                      No enquiry types are currently available. Please contact
                      sales or retry.
                    </p>
                  )}
                  {typesStatus === "error" && (
                    <p className="product-field-error ">{typesError}</p>
                  )}
                </div>
                {(typesStatus === "error" || typesStatus === "empty") && (
                  <button
                    type="button"
                    className="product-types-retry text-sm"
                    onClick={loadTypes}
                  >
                    Retry types
                  </button>
                )}
                {errors.enquiryType && (
                  <p className="product-field-error" id="enquiryType-error">
                    {errors.enquiryType}
                  </p>
                )}
              </div>
              <div className="product-form-full">
                <label htmlFor="enquiry-message">Additional information*</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={7}
                  placeholder="Tell us about your verification exercise"
                  required
                  value={values.message}
                  onChange={change}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p className="product-field-error" id="message-error">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            <button
              className="product-button"
              type="submit"
              disabled={status === "pending" || typesStatus !== "ready"}
            >
              {status === "pending" ? "Submitting…" : sales.submitLabel}
            </button>
          </fieldset>
          <div aria-live="polite" aria-atomic="true">
            {status === "error" && (
              <ul className="product-field-error" role="alert">
                {submitErrors.map((message, index) => <li key={index}>{message}</li>)}
              </ul>
            )}
          </div>
        </form>
      </div>
      <Modal
        show={status === "success"}
        onHide={() => setStatus("idle")}
        centered
        aria-labelledby="enquiry-success-title"
        aria-describedby="enquiry-success-message"
      >
        <Modal.Header closeButton>
          <Modal.Title id="enquiry-success-title">Enquiry received</Modal.Title>
        </Modal.Header>
        <Modal.Body><p id="enquiry-success-message">{successMessage}</p></Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="rounded-lg bg-[#223d8d] px-6 py-2 text-white hover:bg-[#182f73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223d8d]"
            onClick={() => setStatus("idle")}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

ProductEnquiry.propTypes = {
  product: productPropType.isRequired,
  selectedPlan: planPropType,
  onClearPlan: PropTypes.func.isRequired,
  formRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
};
