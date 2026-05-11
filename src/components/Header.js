import React from "react";
import "../components/styles/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img
            src="/logo.png"
            alt="KalBridge Logo"
            className="logo-image"
          />

          <span>KalBridge</span>
        </Link>

        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/medical-tests">Medical Tests</Link>
          </li>

          <li>
            <Link to="/physiotherapy">Physiotherapy</Link>
          </li>

          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;