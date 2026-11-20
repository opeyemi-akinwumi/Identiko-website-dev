import { products, productsPage } from "../../staticData/data";
import { ProductCard } from "../../components/products/ProductUI";

function Products() {
  const { title, banner } = productsPage;
  return (
    <main>
      <section className="products-banner">
        <img src={banner.src} alt={banner.alt} />
        <h1>{title}</h1>
      </section>
      <div className="product-container products-listing">
        <div className="product-grid product-grid-three">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* <section className="products-cta">
          <h2>{cta.title}</h2><p>{cta.description}</p>
          <div className="product-actions">
            <Link className="product-button product-button-white" to={cta.contactHref}>{cta.contactLabel}</Link>
            <Link className="product-button product-button-ghost" to={cta.servicesHref}>{cta.servicesLabel}</Link>
          </div>
        </section> */}
      </div>
    </main>
  );
}

export default Products;
