const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { verifyToken } = require("./middleware/authMiddleware");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(express.json());

// Hardcoded user for simplicity
const sampleUser = {
  username: "testuser",
  password: "password123", // plaintext for demo; use bcrypt in real apps
};

// LOGIN route → issue JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== sampleUser.username || password !== sampleUser.password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

// Protected routes
app.use("/api", protectedRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
