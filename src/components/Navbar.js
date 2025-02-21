import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ background: "linear-gradient(90deg, #6C63FF, #FF6584)" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
          🎗 Fundraising Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-5 text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-5 text-white" to="/create">
                Create Campaign
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-5 text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-5 text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
