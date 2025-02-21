import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const campaignsData = [
  { id: 1, title: "Save the Rainforest", goal: 5000, raised: 1200, description: "Protecting the Amazon rainforest from deforestation." },
  { id: 2, title: "Help Homeless Shelter", goal: 10000, raised: 3500, description: "Providing food and shelter to the homeless." },
];

export default function CampaignDetails() {
  const { id } = useParams();
  const campaign = campaignsData.find(c => c.id === parseInt(id));

  if (!campaign) return <h2 className="text-center text-danger">Campaign Not Found</h2>;

  return (
    <div className="container py-5">
      <h1 className="text-primary">{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p><strong>Goal:</strong> ${campaign.goal}</p>
      <p><strong>Raised:</strong> ${campaign.raised}</p>
      <button className="btn btn-success">Donate</button>
      <div className="mt-3">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
