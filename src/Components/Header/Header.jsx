import "./Header.css";

function Header({ cartCount, onCartOpen }) {
  return (
    <header className="header">
      <h2>Aluminum Utensils</h2>
      <button onClick={onCartOpen}>
        🛒 <span>{cartCount}</span>
      </button>
    </header>
  );
}

export default Header;
