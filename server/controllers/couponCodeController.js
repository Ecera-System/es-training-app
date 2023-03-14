const CouponCode = require("../models/CouponCode");


//<!-- Create Coupon Code -->
exports.createCouponCode = async (req, res, next) => {
    try {
        const result = await CouponCode.create(req.body);
        res.status(200).json({ data: result, success: "Coupon code created successfully!" })
    } catch (error) {
        next(error);
    }
};


//<!-- Get All Coupon Code -->
exports.getAllCouponCode = async (req, res, next) => {
    try {
        const result = await CouponCode.find({}).populate('courseId');
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};


//<!-- Get All Coupon Code -->
exports.updateCouponStatus = async (req, res, next) => {
    try {
        const { status, id } = req.body;
        const result = await CouponCode.findByIdAndUpdate(
            { _id: id },
            { $set: { status: status } },
            { new: true }
        );
        res.status(200).json({ data: result, success: "Status update successfully!" });
    } catch (error) {
        next(error);
    }
};


exports.applyCouponCode = async (req, res, next) => {
    try {
        const { courseId, couponCode } = req.body;

        if (!courseId) return res.status(404).json({ error: "Course isn't founded!" });
        if (!couponCode) return res.status(404).json({ error: "Coupon code is required!" });

        const coupon = await CouponCode.findOne({ courseId, couponCode });

        if (!coupon) return res.status(404).json({ error: "Invalid coupon code!" });

        res.status(200).json(coupon);

    } catch (error) {
        next(error)
    }
};