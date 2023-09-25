const express = require("express");
const connectDB = require("./db");
const TaskModel = require("./models/taskModel");
const userRouter = require("./routes/taskRoutes")

// App
const app = express();
const PORT = 8005;

// Connection to MongoDB
connectDB();

//middlewares
app.use(express.json());

//Routes
app.use("/tasks", userRouter);

// Server listening on PORT
app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});
