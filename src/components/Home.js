

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";


const campaignsData = [
  { id: 1, title: "Save the Rainforest", goal: 5000, raised: 4200, image: "https://img.freepik.com/premium-photo/hand-is-reaching-out-lush-green-jungle_99233-23113.jpg?semt=ais_hybrid" },
  { id: 2, title: "Help Homeless Shelter", goal: 10000, raised: 7800, image: "https://img.freepik.com/premium-photo/donation-concept-donation-box-with-donation-clothes-charity-helping-poor-needy-people_122732-236.jpg?ga=GA1.1.714915880.1740155298" },
  { id: 3, title: "Education for Children", goal: 8000, raised: 6400, image: "https://img.freepik.com/premium-photo/support-against-green-chalkboard_1134-2011.jpg?ga=GA1.1.714915880.1740155298" },
  { id: 4, title: "Medical Aid for Families", goal: 12000, raised: 5000, image: "https://img.freepik.com/premium-photo/yogyakarta-indonesia-february-2023-mother-holding-her-baby-is-undergoing-screening-process-before-getting-covid19-vaccine_539145-193.jpg?ga=GA1.1.714915880.1740155298" },
  { id: 5, title: "Animal Shelter Support", goal: 7000, raised: 4500, image: "https://img.freepik.com/premium-photo/low-section-person-with-puppies-road_1048944-1108803.jpg?ga=GA1.1.714915880.1740155298" },
  { id: 6, title: "Clean Water Initiative", goal: 15000, raised: 11000, image: "https://img.freepik.com/premium-photo/world-being-splashed-with-water-world-being-splashed_1164673-3320.jpg?ga=GA1.1.714915880.1740155298" },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section text-center text-light py-5">
        <h1 className="display-4 fw-bold">🌍 Fundraising Hub</h1>
        <p className="lead text-white">
          Empowering communities, changing lives. <br /> Join us in making a difference!
        </p>
        <Link to="/create">
          <button className="btn btn-lg btn-warning fw-bold shadow-lg mt-3">Start a Campaign</button>
        </Link>
      </div>

      {/* Featured Campaigns Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold text-dark">🔥 Trending Campaigns</h2>
        <p className="text-center text-muted">Discover and support meaningful causes.</p>

        <div className="row">
          {campaignsData.map((campaign) => (
            <div key={campaign.id} className="col-md-4 mb-4">
              <div className="card campaign-card shadow-lg border-0 rounded overflow-hidden">
                <img src={campaign.image} alt={campaign.title} className="card-img-top campaign-image" />
                <div className="card-body text-center">
                  <h4 className="card-title fw-bold text-dark">{campaign.title}</h4>
                  <p className="card-text text-muted">Goal: <strong>${campaign.goal}</strong></p>
                  <p className="card-text text-success">Raised: <strong>${campaign.raised}</strong></p>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                  <button className="btn btn-primary w-100 fw-bold">Donate Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New "Why Choose Us" Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold text-dark">💡 Why Choose Fundraising Hub?</h2>
        <p className="text-center text-muted">We provide a safe and easy platform to create and support campaigns.</p>

        <div className="row text-center">
          <div className="col-md-4">
            <div className="feature-box p-4 rounded shadow">
              <h4 className="fw-bold text-primary">🔒 Secure Donations</h4>
              <p>All transactions are protected and verified for security.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box p-4 rounded shadow">
              <h4 className="fw-bold text-success">🚀 Fast Fundraising</h4>
              <p>Start a campaign in minutes and reach donors quickly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box p-4 rounded shadow">
              <h4 className="fw-bold text-danger">🌍 Global Reach</h4>
              <p>Receive donations from anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center py-5">
        <h3 className="fw-bold text-black">Start Your Own Fundraiser Today!</h3>
        <p className="lg-bold text-black">Together, we can make a difference.</p>
        <Link to="/create">
        <button style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Create Campaign
        </button>
        </Link>
      </div>
      <div>
      {/* Your existing home page content */}
      
      {/* Footer Section */}
    </div>
    <footer className="bg-dark text-light py-4">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4">
                <h5>🌟 Fundraising Hub</h5>
                <p>Helping you raise funds for important causes.</p>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
                  <li><Link className="text-light text-decoration-none" to="/create">Create Campaign</Link></li>
                  <li><Link className="text-light text-decoration-none" to="/about">About Us</Link></li>
                  <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <div>
                  <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-lg"></i></a>
                  <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-lg"></i></a>
                  <a href="#" className="text-light"><i className="fab fa-linkedin fa-lg"></i></a>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            <p className="mb-0">&copy; 2025 Fundraising Hub. All rights reserved.</p>
          </div>
        </footer>
    </div>
  
  );
}
