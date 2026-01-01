import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container checkout">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")}>Go Shopping</button>
        </>
      ) : (
        <div className="checkout-box">
          <div>
            <input placeholder="Full Name" />
            <input placeholder="Mobile Number" />
            <input placeholder="Address" />
          </div>

          <div className="summary">
            <h3>Order Summary</h3>
            {cart.map((item, i) => (
              <p key={i}>
                {item.name} — ₹{item.price}
              </p>
            ))}
            <h2>Total: ₹{total}</h2>
            <button>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
