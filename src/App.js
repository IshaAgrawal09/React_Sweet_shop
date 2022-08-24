import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context";
import Home from "./Components/Home";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Checkout from "./Components/Checkout";
import Placeorder from "./Components/Placeorder";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeOrder" element={<Placeorder />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
