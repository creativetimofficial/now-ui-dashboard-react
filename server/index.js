const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const connectToMongo = require("./db");
const port = 5000

const fileUpload = require("express-fileupload")

app.use(fileUpload({
    useTempFiles: true
}));

app.use(cors())

app.use(bodyParser.json({limit: "100mb"}));

app.use('/assignments', require("./routes/assignments"))
app.use('/courses', require("./routes/courses"))

connectToMongo()

app.get("/", (req, res)=>{
    return res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`App is listening on http://localhost:${port}`);
})