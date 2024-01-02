const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("faculties", facultySchema);