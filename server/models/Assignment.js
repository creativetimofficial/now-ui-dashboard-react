const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
    courseId: {type: mongoose.Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    content: {type: Buffer}
})

module.exports = mongoose.model("assignments", assignmentSchema);