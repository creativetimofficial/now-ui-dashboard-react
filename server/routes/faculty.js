const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator");
const Faculty = require("../models/Faculty");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

router.post("/login", [
    body("email", {error: "Email required for logging in"}).isEmail(),
    body("password", {error: "Password required for logging in"})
], async (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ message: errors.errors[0].msg.error, success: false });
    }

    const faculty = await Faculty.find({email: req.body.email})

    if (faculty.length==0){
        return res.json({message: "No Faculty Member found with the provided email address", success: false})
    }

    const correctPassword = await bcrypt.compare(req.body.password, faculty[0].password);

    if (!correctPassword){
        return res.json({message: "Incorrect Password", success: false});
    }

    const id = {faculty:{id: faculty[0]._id}}
    const token = jwt.sign(id, process.env.JWT_SECRET);

    return res.json({token, success: true});
})

module.exports = router;
