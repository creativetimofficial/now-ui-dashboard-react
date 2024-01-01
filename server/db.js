const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const mongoUri = process.env.MONGO_URI;

const connectToMongo = async () => {
    mongoose.connect(mongoUri);
}

module.exports = connectToMongo;