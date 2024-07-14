const router = require('express').Router();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

router.use("/api/auth", authRoute);
router.use("/api/users", userRoute);
router.use("/api/posts", postRoute);
router.use("/api/categories", categoryRoute);

module.exports = router;