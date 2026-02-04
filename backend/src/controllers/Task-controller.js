const Task = require("../models/Task");

/* ---------- CREATE TASK ---------- */
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title,
      user: req.user.id
    });

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task creation failed"
    });
  }
};

/* ---------- GET USER TASKS ---------- */
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json({
    success: true,
    data: tasks
  });
};

/* ---------- UPDATE TASK ---------- */
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.json({
    success: true,
    data: task
  });
};

/* ---------- DELETE TASK ---------- */
exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  res.json({
    success: true,
    message: "Task deleted successfully"
  });
};
