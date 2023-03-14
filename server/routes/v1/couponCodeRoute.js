const express = require('express');
const router = express.Router();
const adminAuthorize = require('../../middleware/adminAuthorize');
const userAuthorize = require('../../middleware/userAuthorize');
const { createCouponCode, getAllCouponCode, updateCouponStatus, applyCouponCode } = require('../../controllers/couponCodeController');

router.route('/')
    //<!-- Get all Coupon Code -->
    .get(userAuthorize, getAllCouponCode)
    //<!-- Admin can Create Coupon Code -->
    .post(userAuthorize, adminAuthorize, createCouponCode)
    //<!-- Admin can Create Coupon Code -->
    .patch(userAuthorize, adminAuthorize, updateCouponStatus);

router.route('/apply').post(userAuthorize, applyCouponCode)

module.exports = router;