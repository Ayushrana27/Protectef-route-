const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

// Protected route
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: `Welcome ${req.user.username}! You have accessed a protected route.`,
  });
});

module.exports = router;
