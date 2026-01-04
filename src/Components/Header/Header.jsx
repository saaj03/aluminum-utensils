import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

function Header() {
  const { cart } = useCart();
  const { toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">Aluminum Store</Link>

      <nav className="nav">
        {user && <Link to="/orders">Orders</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {!user && <Link to="/login">Login</Link>}
      </nav>

      <div className="actions">
        <button onClick={toggleTheme}>🌙 / ☀️</button>
        <Link to="/checkout">🛒 {totalQty}</Link>
        {user && (
          <button
            className="logout"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
