import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <Link className="navbar-brand" to="/">Navbar</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Infrastructure">Infrastructure</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Clients">Clients</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
