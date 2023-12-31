const express = require("express")
const router = express.Router();
const Assignment = require("../models/Assignment");
const fs = require("fs");

router.post("/create/:id", async (req, res)=>{

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

    const assignment = new Assignment({courseId: req.params.id, content: assignmentBuffer})

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

    return res.json({assignment, success: true})
})

router.get("/", async (req, res)=>{
    const assignments= await Assignment.find();

    return res.json({assignments, success: true})
})

module.exports = router;