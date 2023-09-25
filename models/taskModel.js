const { Schema, model } = require("mongoose");

// Define the schema for a task
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium", // Default priority is set to "Medium"
    },
    description: {
      type: String,
    },
  },
  { timestamps: true } // Add timestamps (createdAt and updatedAt)
);

// Create a model based on the schema
const TaskModel = model("Tasks", taskSchema);

module.exports = TaskModel;
