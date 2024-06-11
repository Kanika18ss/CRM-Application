import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h3 className="navbar-brand" href="#">
          XENO
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link " aria-current="page">
                All Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/high-spenders" className="nav-link" aria-current="page">
                Result
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
