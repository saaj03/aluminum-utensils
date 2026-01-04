import { useAuth } from "../../context/AuthContext";
import OrderManagement from "./OrderManagement";

function Admin() {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <div className="container">Access Denied</div>;
  }

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <OrderManagement />
    </div>
  );
}

export default Admin;
