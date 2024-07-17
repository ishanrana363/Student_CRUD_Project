const express = require("express");

const studentController = require("../controllers/studentsController")

const router = express.Router();

router.get("/student-create", studentController.studentCreate );


module.exports = router;