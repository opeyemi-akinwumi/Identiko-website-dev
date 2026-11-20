import { Outlet } from "react-router-dom";
import "../../components/products/products.css";

function ProductLayout() {
  return <div className="product-pages"><Outlet /></div>;
}

export default ProductLayout;
