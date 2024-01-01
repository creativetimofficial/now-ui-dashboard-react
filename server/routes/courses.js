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

    const allowedExtensions = ['png', 'jpeg', 'jpg'];

    const course = new Course(req.body);

    if (req.files){
        if (req.files.image){
            const fileExtension = req.files.image.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)){
                return res.json({message: "File Type provided is not acceptable", success: false})
            }
            const imageBuffer = fs.readFileSync(req.files.image.tempFilePath);
            course.image = imageBuffer
            fs.rm("./tmp", {
                recursive: true,
              }, (err)=>{
                if (err){
                    console.log("There was an error");
                }
              });
        }
    }

    await course.save();

    return res.json({message: "New Course Created", success: true})

})

router.get("/:id", async (req, res)=>{

    const course = await Course.findById(req.params.id);

    return res.json({course, success: true})
})

router.get("/", async (req, res)=>{
    const courses = await Course.find();

    const coursesToSend = [];
    const len = courses.length;

    for (let i=0; i<len; i++){
        const base64Data = courses[i].image.toString('base64');
        const imageUri = `data:${courses[i].image.contentType};base64,${base64Data}`;
        coursesToSend.push({name: courses[i].name, instructor: courses[i].instructor, image: imageUri});
    }

    return res.json({courses : coursesToSend, success: true})
})

module.exports = router;