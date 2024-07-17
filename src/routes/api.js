const express = require("express");

const studentController = require("../controllers/studentsController")

const router = express.Router();

router.post("/student-create", studentController.studentCreate );
router.get("/all-students", studentController.allStudents);

module.exports = router;