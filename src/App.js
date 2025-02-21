import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import ContactUs from "./components/Contact";
import About from "./components/About";
import CreateCampaign from "./components/CreateCampaign";
import Footer from "./components/Footer"; // Import Footer

export default function FundraisingHubApp() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg shadow-lg py-3 custom-navbar">
  <div className="container">
    <Link className="navbar-brand font-weight-bold fs-2 text-uppercase" to="/">
    🌍 Fundraising Hub
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 px-3" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 px-3" to="/create">Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 px-3" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 px-3" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}









