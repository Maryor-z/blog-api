
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});


//LOGIN
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong credentials")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials")

        console.log(user)
        const accessToken =  jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
        console.log(accessToken)
        res.status(200).json({accessToken:accessToken});

    } catch (err) {
        res.status(500).json(err);
    }       
})


module.exports = router;