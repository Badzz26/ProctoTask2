const mongoose = require("mongoose");

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nodetask_restfulapi");
    console.log("MongoDB connection successful!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
