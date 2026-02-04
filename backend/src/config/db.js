const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
    console.log(" Database name:", mongoose.connection.name);
    console.log(" Host:", mongoose.connection.host);
  } catch (err) {
    console.error(" MongoDB error", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
