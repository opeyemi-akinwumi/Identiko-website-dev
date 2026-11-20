import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { headingPropTypes, productCardPropType } from "./productPropTypes";
import { FiGlobe, FiCpu, FiUserCheck, FiBarChart2, FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";

const icons = { globe: FiGlobe, processor: FiCpu, capture: FiUserCheck, chart: FiBarChart2, phone: FiPhone, email: FiMail, clock: FiClock, location: FiMapPin };

export function ProductIcon({ name }) {
  const Icon = icons[name] || FiUserCheck;
  return <Icon aria-hidden="true" />;
}

export function SectionHeading({ label, title, description }) {
  return (
    <div className="product-section-heading">
      <p className="product-eyebrow">{label}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img className="product-card-image" src={product.image.src} alt={product.image.alt} />
      <div className="product-card-body">
        <h2>{product.name}</h2>
        <p>{product.summary}</p>
        <div className="product-card-action">
          <Link className="product-button" to={`/products/${encodeURIComponent(product.id)}`} aria-label={`${product.viewLabel}: ${product.name}`}>
            {product.viewLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

ProductIcon.propTypes = { name: PropTypes.string.isRequired };
SectionHeading.propTypes = headingPropTypes;
ProductCard.propTypes = { product: productCardPropType.isRequired };
