const express = require("express")
const router = express.Router();
const Assignment = require("../models/Assignment");
const Course = require("../models/Course")
const { body, validationResult} = require("express-validator");
const fs = require("fs");

router.post("/create/:id", [
    body("name", {error: "Assignment Name is required"}),
], async (req, res)=>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({message: errors.errors[0].msg.error, success: false});
    }

    const allowedExtensions = ['docx', 'pdf', 'zip'];

    if (!req.files){
        return res.json({message: "You must provide assignment content", success: false})
    }

    if (!req.files.assignment){
        return res.json({message: "You must provide an asisgnment", success: false})
    }
    
    const fileExtension = req.files.assignment.name.split('.').pop().toLowerCase();
   
    if (!allowedExtensions.includes(fileExtension)){
        return res.json({message: "File Type provided is not acceptable", success: false})
    }

    const assignmentBuffer = fs.readFileSync(req.files.assignment.tempFilePath);

    const assignment = new Assignment({courseId: req.params.id, name: req.body.name, content: assignmentBuffer})

    await assignment.save();

    fs.rm("./tmp", {
        recursive: true,
      }, (err)=>{
        if (err){
            console.log("There was an error");
        }
      });

    return res.json({message: "New assignment created", success: true})

})

router.get("/:id", async (req, res)=>{
    const assignment= await Assignment.findById(req.params.id);

    const course = await Course.findById(assignment.courseId);

    return res.json({assignment, course: course.name, success: true})
})

router.get("/", async (req, res)=>{
    const assignments= await Assignment.find();

    const len = assignments.length;

    const assignmentsToSend = [];

    for (let i=0; i<len; i++){
        const course = await Course.findById(assignments[i].courseId);
        assignments[i].content = "";
        assignmentsToSend.push({name: assignments[i].name, course: course.name, content: assignments[i].content})
    }

    return res.json({assignments: assignmentsToSend, success: true})
})

module.exports = router;