const express = require('express');
const router = express.Router();
const instructorAuthorize = require('../../middleware/instructorAuthorize');
const userAuthorize = require('../../middleware/userAuthorize');
const { getEnrolledCourse, enrollCourseByUSD, postStripeWebHook, enrollCourseByINR, razorpayVerify } = require('../../controllers/courseEnrollController');


router.route('/student').get(userAuthorize, getEnrolledCourse);

//<!-- Course Checkout -->
router.route('/enroll-in-usd').post(userAuthorize, enrollCourseByUSD);
router.route('/stripe/webhook').post(postStripeWebHook);
router.route('/enroll-in-inr').post(userAuthorize, enrollCourseByINR);
router.route('/razorpay-verify').post(userAuthorize, razorpayVerify);

module.exports = router;