const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
    });
    const conn = mongoose.connection;
    console.log(`Connected to Mongo DATABASE: ${conn.host}, ID: ${conn.id}`);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    // this is used to exit the node process
    process.exit(1);
  }
};

module.exports = connectDB;
