const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  image: { type: Buffer }
});

module.exports = mongoose.model("courses", courseSchema);
