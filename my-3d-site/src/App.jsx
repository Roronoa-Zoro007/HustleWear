import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
import Tshirts from "./pages/Tshirts";
import Jerseys from "./pages/Jerseys";
import Pants from "./pages/Pants";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Categories */}
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/jerseys" element={<Jerseys />} />
        <Route path="/pants" element={<Pants />} />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Product */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <CartDrawer />
    </BrowserRouter>
  );
}

export default App;