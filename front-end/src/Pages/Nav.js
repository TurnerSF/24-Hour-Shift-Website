import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="d-flex justify-content-end">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark spaced-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shopping" className="nav-link text-dark spaced-link">
            Shopping
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link text-dark spaced-link">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-dark spaced-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-dark spaced-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
