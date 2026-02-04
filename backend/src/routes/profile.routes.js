const express = require("express");
const auth = require("../middlewares/auth.middleware");
const User = require("../models/User");
const Task = require("../models/Task");

const router = express.Router();

// GET LOGGED-IN USER PROFILE
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const totalTasks = await Task.countDocuments({ user: req.user.id });
    const completedTasks = await Task.countDocuments({
      user: req.user.id,
      completed: true
    });

    res.json({
      name: user.name,
      email: user.email,
      totalTasks,
      completedTasks
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
