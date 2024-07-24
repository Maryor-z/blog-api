const {Authenticator} = require("../auth/auth") 

class PostController {
    static async fetchAllPosts(req, res, next) {
        console.log(posts)
        const posts = req.posts
        res.status(200).json({
            "message": "All post retrieved",
            data: posts
        })
    }
    
}

module.exports = PostController;
