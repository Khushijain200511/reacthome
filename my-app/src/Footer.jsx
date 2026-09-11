import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h3>KALYAN JEWELLERS</h3>
          <p>
            Discover timeless jewellery crafted with elegance,
            tradition and excellence.
          </p>
        </div>

        
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <a href="/">Home</a>
          <a href="/">Our Brands</a>
          <a href="/">Jewellery</a>
          <a href="/">Gifts</a>
          <a href="/">About Us</a>
        </div>

        
        <div className="footer-column">
          <h3>CUSTOMER SERVICE</h3>
          <a href="/">Contact Us</a>
          <a href="/">Shipping & Delivery</a>
          <a href="/">Returns</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

       
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p> India</p>
          <p>+91 12345 67890</p>
          <p>info@kalyanjewellers.com</p>

          <div className="social-icons">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">YouTube</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Kalyan Jewellers. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;