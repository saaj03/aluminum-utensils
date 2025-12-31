import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Home";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Checkout from "./Components/Checkout/Checkout";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product, qty = 1) => {
    setCart([...cart, { ...product, qty }]);
    setShowCart(true);
  };

  return (
    <>
      <Header
        cartCount={cart.length}
        onCartOpen={() => setShowCart(true)}
      />

      {!selectedProduct && !checkout && (
        <Home onView={setSelectedProduct} />
      )}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={() => setSelectedProduct(null)}
        />
      )}

      {showCart && (
        <div className="cart-sidebar">
          <h3>Your Cart</h3>

          {cart.map((item, i) => (
            <p key={i}>{item.name} × {item.qty}</p>
          ))}

          <button onClick={() => setCheckout(true)}>
            Checkout
          </button>
          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}

      {checkout && <Checkout />}

      <Footer />
    </>
  );
}

export default App;
