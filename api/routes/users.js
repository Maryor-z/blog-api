const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const UserController = require("../controllers/UserController");
const { updatePost } = require("../controllers/PostController");
const {PaginateMiddleware} = require("../middleware");
const { paginatedResults } = PaginateMiddleware;
const { UserServices } = require("../services");


const { updateUser, deleteUser, getUserById, getAllUser} = UserServices;
const {fetchAllUser} = UserController;
//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET USER
router.get("/:id", getUserById)

//GET ALL USER
router.get("/", getAllUser, paginatedResults, fetchAllUser)



module.exports = router;