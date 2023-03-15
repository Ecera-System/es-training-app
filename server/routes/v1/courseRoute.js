const express = require('express');
const router = express.Router();
const instructorAuthorize = require('../../middleware/instructorAuthorize');
const userAuthorize = require('../../middleware/userAuthorize');
const adminAuthorize = require('../../middleware/adminAuthorize');
const { getCourseById, addCourse, getAllCourses, updateCourseStatus, deleteCourseById, getTopSalesCourse } = require('../../controllers/courseController');


//<!-- Get Top Sales Course -->
router.route('/top-sale').get(userAuthorize, adminAuthorize, getTopSalesCourse);

router.route('/')
    //<!-- Get All Courses -->
    .get(getAllCourses)
    //<!-- Add Course -->
    .post(userAuthorize, instructorAuthorize, addCourse);

router.route('/:id')
    .get(getCourseById)
    .patch(userAuthorize, adminAuthorize, updateCourseStatus)
    .delete(userAuthorize, adminAuthorize, deleteCourseById);


module.exports = router;