const express = require("express")
const router = express.Router()
const Course = require("../models/Course");
const fs = require("fs");
const { body, validationResult } = require("express-validator")

router.post("/create", [
    body("name", {error: "Provide name of the course."}).isLength({min: 1}),
    body("instructor", {error: "Provide instructor name."}).isLength({min: 1})
], async (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({message: errors.errors[0].msg.error, success: false});
    }

    const course = new Course(req.body);

    await course.save();

    return res.json({message: "New Course Created", success: true})

})

router.post("/addimage/:id", async (req, res)=>{

    const allowedExtensions = ['png', 'jpeg', 'jpg'];

    if (!req.files){
        return res.json({message: "You must provide an image file", success: false})
    }

    if (!req.files.image){
        return res.json({message: "You must provide image", success: false})
    }
    const fileExtension = req.files.image.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)){
        return res.json({message: "File Type provided is not acceptable", success: false})
    }

    const imageBuffer = fs.readFileSync(req.files.image.tempFilePath);

    await Course.findByIdAndUpdate(req.params.id, { $set: {image: imageBuffer} });

    fs.rm("./tmp", {
        recursive: true,
      }, (err)=>{
        if (err){
            console.log("There was an error");
        }
      });

    return res.json({message: "Image added with the course", success: true});
})

router.get("/:id", async (req, res)=>{

    const course = await Course.findById(req.params.id);

    return res.json({course, success: true})
})

router.get("/", async (req, res)=>{
    const courses = await Course.find();

    return res.json({courses, success: true})
})

module.exports = router;