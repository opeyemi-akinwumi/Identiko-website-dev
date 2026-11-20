import PropTypes from "prop-types";

const text = PropTypes.string.isRequired;
const image = PropTypes.shape({ src: text, alt: text }).isRequired;

export const headingPropTypes = {
  label: text,
  title: text,
  description: PropTypes.string,
};

export const aboutPropType = PropTypes.shape({
  label: text,
  title: text,
  paragraphs: PropTypes.arrayOf(text).isRequired,
  image,
  caption: text,
  captionDetail: text,
});

export const capabilitiesPropType = PropTypes.shape({
  ...headingPropTypes,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: text,
    icon: text,
    title: text,
    description: text,
  }).isRequired).isRequired,
});

export const processPropType = PropTypes.shape({
  ...headingPropTypes,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: text,
    title: text,
    description: text,
  }).isRequired).isRequired,
});

export const applicationsPropType = PropTypes.shape({
  ...headingPropTypes,
  benefitLabel: text,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: text,
    title: text,
    image,
    description: text,
    benefit: text,
  }).isRequired).isRequired,
});

export const planPropType = PropTypes.shape({
  id: text,
  name: text,
  description: text,
  price: text,
  basis: text,
  featured: PropTypes.bool.isRequired,
});

export const pricingPropType = PropTypes.shape({
  ...headingPropTypes,
  actionLabel: text,
  plans: PropTypes.arrayOf(planPropType.isRequired).isRequired,
});

const salesPropType = PropTypes.shape({
  ...headingPropTypes,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: text,
    icon: text,
    label: text,
    value: text,
    href: PropTypes.string,
  }).isRequired).isRequired,
  formTitle: text,
  formDescription: text,
  submitLabel: text,
  successMessage: text,
  errorMessage: text,
});

const cardFields = {
  id: text,
  name: text,
  summary: text,
  image,
  viewLabel: text,
};

export const productCardPropType = PropTypes.shape(cardFields);

export const productPropType = PropTypes.shape({
  ...cardFields,
  hero: PropTypes.shape({
    title: text,
    description: text,
    pricingLabel: text,
    contactLabel: text,
  }).isRequired,
  about: aboutPropType.isRequired,
  capabilities: capabilitiesPropType.isRequired,
  process: processPropType.isRequired,
  applications: applicationsPropType.isRequired,
  pricing: pricingPropType.isRequired,
  sales: salesPropType.isRequired,
});
