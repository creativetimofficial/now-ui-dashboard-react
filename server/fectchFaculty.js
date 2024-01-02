const jwt = require("jsonwebtoken");

const fetchFaculty = (req, res, next) => {
    const facultyToken = req.header("faculty-token");

    if (!facultyToken) {
        return res.json({ message: "Please authenticate using a valid token", success: false });
    }

    try {
        const string = jwt.verify(facultyToken, process.env.JWT_SECRET);
        req.faculty = string.faculty;
    } catch (error) {
        return res.status(401).send({message: "Please authenticate using a valid token", success: false });
    }
    next();
}

module.exports = fetchFaculty;