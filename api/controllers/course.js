const Courses = require('../models/course')

const courseController = {
    async getAll(req,res) {
        res.status(200).json(await Courses.getAll())
    },
    async getCourseById(req,res) {
        res.status(200).json(await Courses.getCourseById(req.params.course_id))
    },
    async getCourseByOwnerId(req,res) {
        res.status(200).json(await Courses.getCourseByOwnerId(req.params.user_id))
    },
    async getUserCourseById(req,res) {
        res.status(200).json(await Courses.getUserCourseById(req.params.user_id))
    },
    async addCourse(req,res) {
        res.status(201).json(await Courses.addCourse(req.body))
    },
    async addCourseToUser(req,res) {
        res.status(201).json(await Courses.addUserCourse(req.body))
    },
    async editCourse(req,res) {
        res.status(201).json(await Courses.editCourse(req.body))
    },
    async deleteUserCourse(req,res) {
        res.status(202).json(await Courses.deleteUserCourse(req.body))
    },
    async deleteCourse(req,res) {
        res.status(202).json(await Courses.deleteUserCourse(req.body))
    }
};

module.exports = courseController;