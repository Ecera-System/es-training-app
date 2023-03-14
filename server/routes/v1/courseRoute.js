const express = require('express');
const router = express.Router();
const instructorAuthorize = require('../../middleware/instructorAuthorize');
const userAuthorize = require('../../middleware/userAuthorize');
const { getCourseById, addCourse, getAllCourses } = require('../../controllers/courseController');

router.route('/:id').get(getCourseById)
router.route('/')
    //<!-- Get All Courses -->
    .get(getAllCourses)
    //<!-- Add Course -->
    .post(userAuthorize, instructorAuthorize, addCourse);


//<!-- Course Enroll Route -->
// router.route('/enroll-in-usd').post(userAuthorize, enrollCourseByUSD);
// router.route('/stripe/webhook').post(postStripeWebHook);
// router.route('/enroll-in-inr').post(userAuthorize, enrollCourseByINR);
// router.route('/razorpay-verify').post(userAuthorize, razorpayVerify);

module.exports = router;