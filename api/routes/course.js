const router = require('express').Router();
const courseController = require('../controllers/course')

router.get("/", courseController.getAll)
router.get("/:course_id", courseController.getCourseById)
router.get("/owner/:user_id", courseController.getCourseByOwnerId)
router.get("/user/:user_id", courseController.getUserCourseById)
router.get("/owner", courseController.addCourse)
router.get("/user", courseController.addCourseToUser)
router.get("/", courseController.editCourse)
router.get("/owner", courseController.deleteCourse)
router.get("/user", courseController.deleteUserCourse)
module.exports = router