const express = require("express");
const jwt = require("jsonwebtoken");
const { users } = require("../data/fakeDB");

const router = express.Router();
const SECRET_KEY = "mysecretkey"; // Use environment variable in production

// Register User
router.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = { username, password };
    users.push(newUser);
    res.json({ message: "User registered successfully!", user: newUser });
});

// Login User
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
});

module.exports = router;

