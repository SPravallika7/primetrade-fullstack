const User = require("../models/User");
const Task = require("../models/Task");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

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
};
