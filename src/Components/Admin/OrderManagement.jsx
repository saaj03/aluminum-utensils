import { useOrders } from "../../context/OrderContext";
import "./OrderManagement.css";

function OrderManagement() {
  const { orders, updateOrderStatus } = useOrders();

  if (!orders.length) {
    return <p>No orders yet.</p>;
  }

  return (
    <div>
      <h2>Order Management</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-admin-card">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>User:</strong> {order.userEmail}</p>
          <p><strong>Status:</strong> {order.status}</p>

          <select
            value={order.status}
            onChange={(e) =>
              updateOrderStatus(order.id, e.target.value)
            }
          >
            <option value="Placed">Placed</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default OrderManagement;
