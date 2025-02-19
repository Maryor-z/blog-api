const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserServices {
    static async updateUser(req, res) {
        if (req.body.userId === req.params.id) {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true });
                res.status(200).json(updatedUser);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your account!");
        }
    }

    static async deleteUser (req, res) {
        if (req.body.userId === req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                try {
                    await Post.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User has been deleted...");
                } catch (err) {
                    res.status(500).json(err);
                }
            } catch (err) {
                res.status(404).json("User not found!");
            }
        } else {
            res.status(401).json("You can delete only your account!");
        }
    }

    static async getUserById (req,res) {
        try{
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllUser(req, res, next) {
        try {
            console.log("Fetching all users...");

            const users = await User.find({});

            if (!users.length) {
                return res.status(404).json({ message: "No users found" });
            }

            console.log(`${users.length} users found`);
            const usersWithoutPasswords = users.map(user => {
                const { password, ...others } = user._doc;
                return others;
            });
            req.users = usersWithoutPasswords;
            next()

            } catch (err) {
            res.status(500).json(err)
        }

    }
}

module.exports =  UserServices; 