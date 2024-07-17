const express = require("express");

const studentController = require("../controllers/studentsController")

const router = express.Router();

router.post("/student-create", studentController.studentCreate );
router.get("/all-students", studentController.allStudents);
router.put("/update-student/:id",studentController.studentUpdate);
router.delete("/delete-student/:id",studentController.studentDelete);
router.get("/student-search/:keyword",studentController.studentSearch);

module.exports = router;