

class UserController {
    static async fetchAllUser(req, res, next) {
        const users = req.paginatedResults
        res.status(200).json({
            "message": "All users retrived successfully",
            data: users
        })

    }
}

module.exports = UserController;