import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

function Header() {
  const { cart } = useCart();
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <Link to="/" className="logo">Aluminum Store</Link>

      <div className="header-actions">
        <button onClick={toggleTheme}>🌙 / ☀️</button>
        <Link to="/checkout">🛒 {cart.length}</Link>
      </div>
    </header>
  );
}

export default Header;
