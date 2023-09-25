const TaskModel = require("../models/taskModel");

// Get all tasks
async function getAllTasks(req, res) {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Get a task by ID
async function getTaskById(req, res) {
  try {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Create a new task
async function createTask(req, res) {
  try {
    const { title, description, priority } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const newTask = new TaskModel({
      title,
      description,
      priority,
    });
    await newTask.save();
    return res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Update an existing task by ID
async function updateTaskById(req, res) {
  try {
    const updateFields = req.body;
    const task = await TaskModel.findByIdAndUpdate(req.params.id, updateFields, {
      new: true, // Return the updated task
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a task by ID
async function deleteTaskById(req, res) {
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
