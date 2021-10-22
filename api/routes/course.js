const router = require('express').Router();
const courseController = require('../controllers/course')

router.get("/", courseController)
module.exports = router