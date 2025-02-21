import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We connect donors with meaningful causes. Start your campaign today and make an impact!</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us Section with Text */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fab fa-facebook"></i> <a href="#" className="text-light text-decoration-none">Facebook</a>
              </li>
              <li>
                <i className="fab fa-twitter"></i> <a href="#" className="text-light text-decoration-none">Twitter</a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i> <a href="#" className="text-light text-decoration-none">LinkedIn</a>
              </li>
              <li>
                <i className="fab fa-instagram"></i> <a href="#" className="text-light text-decoration-none">Instagram</a>
              </li>
              <li>
                <i className="fab fa-youtube"></i> <a href="#" className="text-light text-decoration-none">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center mt-3">© 2024 Fundraising Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
