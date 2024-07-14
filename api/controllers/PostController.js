const User = require("../models/User");
const Post = require("../models/Post");

class PostController {
    static async createPost(req, res) {
        const options = {
            username: req.user,
            ...req.body
        };
        const newPost = new Post(options);
        console.log(req.user);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async updatePost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (post.username === req.body.username) {
                try {
                    const updatedPost = await Post.findByIdAndUpdate(
                        req.params.id,
                        { $set: req.body },
                        { new: true }
                    );
                    res.status(200).json(updatedPost);
                } catch (err) {
                    res.status(500).json(err);
                }
            } else {
                res.status(401).json("You can update only your post");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deletePost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (post.username === req.body.username) {
                try {
                    await post.delete();
                    res.status(200).json("Post has been deleted...");
                } catch (err) {
                    res.status(500).json(err);
                }
            } else {
                res.status(401).json("You can delete only your post");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getPost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllPosts(req, res) {
        const username = req.query.user;
        const catName = req.query.cat;
        try {
            let posts;
            if (username) {
                posts = await Post.find({ username: username });
            } else if (catName) {
                posts = await Post.find({
                    categories: {
                        $in: [catName]
                    },
                });
            } else {
                posts = await Post.find();
            }
            res.status(200).json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = PostController;
