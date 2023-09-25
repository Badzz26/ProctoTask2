const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

// Route for all tasks
router.get("/", getAllTasks);
router.post("/", createTask);

// Route for a specific task by ID
router.get("/:id", getTaskById);
router.patch("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

module.exports = router;
