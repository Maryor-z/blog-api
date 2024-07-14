require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const ROUTES = require("./routes/index");
app.use(express.json());
const connectDB = require('./config/db')

//Connect API to DATABASE
connectDB();

app.all("/",(req, res, next) => {
  res.status(200).send("Server is alive");
});

app.use("/api/", ROUTES);


const PORT = process.env.PORT || "5000";
app.listen(PORT, () => {
  console.log(`BLOG API: RUNNING ON PORT: ${PORT}`);
});
