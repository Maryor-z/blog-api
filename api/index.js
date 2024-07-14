require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const ROUTES = require("./routes/index");
app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpg");
  },
});

const upload = multer({ atorage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL, {   
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


app.all("/",(req, res, next) => {
  res.status(200).send("Server is alive");
});

app.use("/api/", ROUTES);


const PORT = process.env.PORT || "5000";
app.listen(PORT, () => {
  console.log(`BLOG API: RUNNING ON PORT: ${PORT}`);
});
