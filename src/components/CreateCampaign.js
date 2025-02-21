import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateCampaign() {
  const [newCampaign, setNewCampaign] = useState({ title: "", goal: "" });

  const createCampaign = () => {
    if (newCampaign.title && newCampaign.goal) {
      console.log("New Campaign Created", newCampaign);
      setNewCampaign({ title: "", goal: "" });
    }
  };

  return (
    <div className="container py-5">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center text-dark">Create a Campaign</h2>
        <input
          type="text"
          placeholder="Campaign Title"
          className="form-control my-3"
          value={newCampaign.title}
          onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Goal Amount"
          className="form-control my-3"
          value={newCampaign.goal}
          onChange={(e) => setNewCampaign({ ...newCampaign, goal: e.target.value })}
        />
        <button className="btn btn-primary w-100" onClick={createCampaign}>Create</button>
        <div className="text-center mt-3">
          <Link to="/"><button className="btn btn-secondary">Back to Home</button></Link>
        </div>
      </div>
    </div>
  );
}
