import { ProductIcon, SectionHeading } from "./ProductUI";
import PropTypes from "prop-types";
import {
  aboutPropType,
  applicationsPropType,
  capabilitiesPropType,
  pricingPropType,
  processPropType,
} from "./productPropTypes";

export function ProductAbout({ about }) {
  return (
    <section className="product-section">
      <div className="product-container product-split product-about">
        <div>
          <p className="product-eyebrow">{about.label}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <figure>
          <img src={about.image.src} alt={about.image.alt} loading="lazy" />
          <figcaption>
            <strong>{about.caption}</strong>
            <span>{about.captionDetail}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ProductCapabilities({ capabilities }) {
  return (
    <section className="product-section product-muted">
      <div className="product-container">
        <SectionHeading {...capabilities} />
        <div className="product-grid product-grid-four">
          {capabilities.items.map((item) => (
            <article className="product-capability" key={item.id}>
              <span className="product-icon-circle">
                <ProductIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductProcess({ process }) {
  return (
    <section className="product-section">
      <div className="product-container">
        <SectionHeading {...process} />
        <ol className="product-grid product-grid-four product-process">
          {process.items.map((item, index) => (
            <li key={item.id}>
              <span className="product-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProductApplications({ applications }) {
  return (
    <section className="product-section product-muted">
      <div className="product-container">
        <SectionHeading {...applications} />
        <div className="product-grid product-grid-three">
          {applications.items.map((item) => (
            <article className="product-application" key={item.id}>
              <img src={item.image.src} alt={item.image.alt} loading="lazy" />
              <div className="product-application-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="product-benefit">
                  <strong>{applications.benefitLabel}</strong> {item.benefit}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPricing({ pricing, onSelectPlan }) {
  return (
    <section className="product-section" id="pricing">
      <div className="product-container">
        <SectionHeading {...pricing} />
        <div className="product-grid product-grid-three">
          {pricing.plans.map((plan) => (
            <article
              className={`product-plan${
                plan.featured ? " product-plan-featured" : ""
              }`}
              key={plan.id}
            >
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="product-plan-price">{plan.price}</div>
              <p>{plan.basis}</p>
              <div className="product-card-action">
                <button
                  className="product-button product-button-outline"
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  aria-label={`${pricing.actionLabel} with ${plan.name}`}
                >
                  {pricing.actionLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

ProductAbout.propTypes = { about: aboutPropType.isRequired };
ProductCapabilities.propTypes = {
  capabilities: capabilitiesPropType.isRequired,
};
ProductProcess.propTypes = { process: processPropType.isRequired };
ProductApplications.propTypes = {
  applications: applicationsPropType.isRequired,
};
ProductPricing.propTypes = {
  pricing: pricingPropType.isRequired,
  onSelectPlan: PropTypes.func.isRequired,
};
