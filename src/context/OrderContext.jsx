import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const { user } = useAuth();

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add new order
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // Update order status (admin)
  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status }
          : order
      )
    );
  };

  // Orders for logged-in user only
  const userOrders = user
    ? orders.filter((o) => o.userEmail === user.email)
    : [];

  return (
    <OrderContext.Provider
      value={{
        orders,
        userOrders,
        addOrder,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
