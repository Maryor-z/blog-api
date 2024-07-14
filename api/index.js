require('dotenv').config();

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const jwt = require('jsonwebtoken');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {   
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images");
    },
    filename: (req, file , cb) => {
        cb(null, "hello.jpg");
    },
});

const upload = multer({ atorage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});



function authenticateToken(req,res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
}
    
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", authenticateToken, postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running");
})