import { useOrders } from "../../context/OrderContext";
import { generateInvoice } from "../../utils/invoice";
import "./Orders.css";

function Orders() {
  const { userOrders } = useOrders();

  if (!userOrders.length) {
    return (
      <div className="container">
        <h1>My Orders</h1>
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="container orders">
      <h1>My Orders</h1>

      {userOrders.map((order) => (
        <div key={order.id} className="order-card">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Status:</strong> {order.status}</p>

          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.qty} — ₹{item.price * item.qty}
              </li>
            ))}
          </ul>

          <h3>Total: ₹{order.total}</h3>

          <button onClick={() => generateInvoice(order)}>
            Download Invoice
          </button>
        </div>
      ))}
    </div>
  );
}

export default Orders;
