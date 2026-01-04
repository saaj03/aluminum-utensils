import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import { useAuth } from "../../context/AuthContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (!cart.length) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>
          Go Shopping
        </button>
      </div>
    );
  }

  const payNow = () => {
    const options = {
      key: "rzp_test_XXXXXXXX", // 🔴 Replace with your Razorpay test key
      amount: total * 100,
      currency: "INR",
      name: "Aluminum Store",
      description: "Order Payment",
      handler: function (response) {
        addOrder({
          id: Date.now(),
          userEmail: user.email,
          items: cart,
          total,
          paymentId: response.razorpay_payment_id,
          status: "Placed",
          date: new Date().toLocaleString()
        });

        clearCart();
        navigate("/success");
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container checkout">
      <h1>Checkout</h1>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} × {item.qty} = ₹
          {item.price * item.qty}
        </p>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={payNow}>
        Pay with Razorpay
      </button>
    </div>
  );
}

export default Checkout;
