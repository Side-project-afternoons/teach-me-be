const { getCourseById } = require("../controllers/course");
const db = require("../data/db-config");

const getAll = async () => {
    return await db("courses")
}

const getByCourseId = async (course_id) => {
    return await db("courses").where({course_id})
}

const getByCourseOwnerId = async (user_id) => {
    return await db("courses").where("owner_id", user_id)
}

const getBy = async (filter) => {
    return await db("courses").where(filter)
}

const getUserCourseById = async (user_id) => {
    const courses = await db("courses as c")
    .select(
        "c.course_name",
        "c.course_description",
        "c.course_image",
        "c.course_id"
    )
    .join("course_user_table as cu", "cu.course_id", "c.course_id" )
    .join("users as u", "u.user_id","cu.user_id")
    .where("cu.user_id", user_id)

    return courses
}

const addCourse = async (course) => {
    const [{course_id}] = await db("courses").insert(course, ["course_id"])
    return await getByCourseId(course_id)
}

const addUserCourse = async (course) => {
    const [{course_id}] = await db("course_user_table").insert(course, ["course_id"])
    return await getByCourseId(course_id)
}

const editCourse = async (course) => {
    const course_id = course.course_id
    await db("courses").where({course_id}).update(course)
    return getCourseById(course_id)
}

const deleteUserCourse = async (body) => {
    const {course_id, user_id} = body
    const deleted = getByCourseId(course_id)
    await db("course_user_table").where({course_id, user_id}).del()
    return deleted
}

const deleteCourse = async (body) => {
    const course_id = body.course_id
    const deleted = getByCourseId(course_id)
    await db("courses").where({course_id}).del()
    return deleted
}
module.exports =  { getAll, getByCourseId, getBy, 
    getByCourseOwnerId, getUserCourseById, addCourse, 
    addUserCourse, editCourse, deleteUserCourse, 
    deleteCourse}
   