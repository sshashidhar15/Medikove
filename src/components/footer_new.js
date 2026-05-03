import React from "react";
import "../components/styles/Main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Company */}
          <div className="footer-col">
            <h4>KalBridge</h4>
            <p>
              Medical verification and evaluation services for international visa
              requirements. Simplifying healthcare processes through home collection
              and guided clinic visits.
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li>Australia Medical Tests</li>
              <li>New Zealand Medical Tests</li>
              <li>Home Sample Collection</li>
              <li>Document Verification</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/medical-tests">Medical Tests</a></li>
              <li><a href="/physiotherapy">Physiotherapy</a></li>
              <li><a href="/contactus">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <p>+91 9502451335</p>
            <p>shashi@kalbridge.com</p>
            <p>Hyderabad, Telangana</p>
          </div>

        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KalBridge. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;