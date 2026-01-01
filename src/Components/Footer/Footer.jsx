import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Aluminum Utensils</h3>
          <p>
            Premium quality aluminum cookware trusted by Indian kitchens.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@aluminumutensils.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aluminum Utensils Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
