const express = require("express");
const authenticateUser = require("../middleware/authMiddleware");
const { campaigns } = require("../data/fakeDB");

const router = express.Router();

// Create a campaign
router.post("/create", authenticateUser, (req, res) => {
    const { title, description } = req.body;
    const newCampaign = { id: campaigns.length + 1, title, description, createdBy: req.user.username };
    campaigns.push(newCampaign);
    res.json({ message: "Campaign created successfully!", campaign: newCampaign });
});

// Get all campaigns
router.get("/history", authenticateUser, (req, res) => {
    res.json(campaigns);
});

module.exports = router;
