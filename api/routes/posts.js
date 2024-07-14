const express = require("express");
const router = express.Router();
const Authenticator = require('../auth/auth')
const {authenticateToken} = Authenticator
const PostController = require("../controllers/PostController");

const { createPost, updatePost, getAllPosts, deletePost, getPost } =
  PostController;

router.post("/", authenticateToken, createPost);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);
router.get("/:id", authenticateToken, getPost);
router.get("/", authenticateToken, getAllPosts);

module.exports = router;
