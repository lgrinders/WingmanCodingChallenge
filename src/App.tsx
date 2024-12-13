import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ScrollToTop from "./hooks/scrollToTop/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-item/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
