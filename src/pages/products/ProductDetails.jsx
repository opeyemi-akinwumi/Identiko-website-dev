import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { products } from "../../staticData/data";
import { ProductAbout, ProductApplications, ProductCapabilities, ProductPricing, ProductProcess } from "../../components/products/ProductSections";
import ProductEnquiry from "../../components/products/ProductEnquiry";
import { productPropType } from "../../components/products/productPropTypes";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  return product ? <ProductContent key={product.id} product={product} /> : (
    <main className="product-container product-not-found">
      <h1>Product not found</h1><p>The product you’re looking for is unavailable.</p>
      <Link className="product-button" to="/products">Back to products</Link>
    </main>
  );
}

function ProductContent({ product }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const formRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== "#contact-sales" && hash !== "#pricing") return;
    // Run after the shared route scroll reset, including direct hash visits.
    const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  function selectPlan(plan) {
    setSelectedPlan(plan);
    document.getElementById("contact-sales")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    formRef.current?.elements.namedItem("name")?.focus({ preventScroll: true });
  }

  return (
    <main>
      <section className="product-section product-muted product-hero">
        <div className="product-container product-split">
          <div>
            <p className="product-eyebrow">{product.name}</p><h1>{product.hero.title}</h1>
            <p className="product-hero-description">{product.hero.description}</p>
            <div className="product-actions">
              <a className="product-button" href="#pricing">{product.hero.pricingLabel}</a>
              <a className="product-button product-button-outline" href="#contact-sales">{product.hero.contactLabel}</a>
            </div>
          </div>
          <img className="product-hero-image" src={product.image.src} alt={product.image.alt} />
        </div>
      </section>
      <ProductAbout about={product.about} />
      <ProductCapabilities capabilities={product.capabilities} />
      <ProductProcess process={product.process} />
      <ProductApplications applications={product.applications} />
      <ProductPricing pricing={product.pricing} onSelectPlan={selectPlan} />
      <ProductEnquiry product={product} selectedPlan={selectedPlan} onClearPlan={() => setSelectedPlan(null)} formRef={formRef} />
    </main>
  );
}

ProductContent.propTypes = {
  product: productPropType.isRequired,
};

export default ProductDetails;
