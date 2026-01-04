import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Aluminum Store</p>
        <div className="socials">
          <span>🌐</span>
          <span>📘</span>
          <span>📸</span>
          <span>🐦</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
