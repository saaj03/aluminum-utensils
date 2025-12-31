import "./Checkout.css";

function Checkout() {
  return (
    <div className="container checkout">
      <h1>Checkout</h1>

      <input placeholder="Full Name" />
      <input placeholder="Mobile Number" />
      <input placeholder="Address" />

      <select>
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Card</option>
      </select>

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;
