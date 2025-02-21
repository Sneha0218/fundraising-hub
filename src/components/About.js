import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "800px", borderRadius: "15px" }}>
        <h2 className="text-center" style={{ color: "#6C63FF", fontWeight: "bold" }}>
          About Fundraising Hub
        </h2>
        <p className="lead mt-3 text-secondary">
          Fundraising Hub is a trusted platform to help individuals and organizations raise funds for meaningful causes.
        </p>
        <h4 className="text-primary mt-4">Why Choose Us?</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✔ Secure and Transparent Fundraising</li>
          <li className="list-group-item">✔ User-Friendly Campaign Management</li>
          <li className="list-group-item">✔ Trusted by Thousands of Users</li>
        </ul>
      </div>
    </div>
  );
}


