import {
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/others/Footer";
import Header from "./components/others/Header";
import ScrollButton from "./components/others/ScrollButton";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import Isms from "./pages/Isms";
import ContactPage from "./pages/ContactPage";
import PolicyImages from "./components/others/PolicyImages";
import Hero from "./components/home/Hero";
import ScrollToTop from "./components/others/ScrollToTop";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import ProductLayout from "./pages/products/ProductLayout";

const Layout = () => {
  return (
    <div>
      {<Header />}
      {/* <ScrollRestoration /> */}
      <Outlet />
      {<Footer />}
    </div>
  );
};

const App = () => {
  return (
    <div className="font-bodyFont">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/isms-policy" element={<Isms />} />
            <Route path="/career-page" element={<Career />} />
            <Route path="/products" element={<ProductLayout />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
            <Route path="/hero" element={<Hero />} />
          </Route>
        </Routes>

        <ScrollButton />
        <PolicyImages />
      </Router>
    </div>
  );
};

export default App;
