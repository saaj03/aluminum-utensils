import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🎉 Order Successful!</h1>
      <p>Your order has been placed successfully.</p>

      <button onClick={() => navigate("/orders")}>
        View My Orders
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default Success;
