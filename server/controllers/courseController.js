const Jimp = require("jimp");
const path = require("path");
const Course = require("../models/Course");
const User = require("../models/User");
const CouponCode = require("../models/CouponCode");
const Certificate = require("../models/Certificate");
const Assignment = require("../models/Assignment");

// <!-- Get a course -->
exports.getCourseById = async (req, res, next) => {
    try {
        const result = await Course.findById({ _id: req.params.id });

        if (!result) return res.status(404).json({ error: "No course was founded with this id." });

        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
};

// <!-- Change Course Status -->
exports.updateCourseStatus = async (req, res, next) => {
    try {
        const result = await Course.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    status: req.body.status
                }
            },
            { runValidators: true }
        );

        if (!result) return res.status(404).json({ error: "No course founded with this id." });

        res.status(200).json({ success: 'Course status change successfully!', data: result });
    } catch (error) {
        next(error)
    }
}

// <!-- Delete Course By Id -->
exports.deleteCourseById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // <!-- Remove course id from Users -->
        await User.updateMany(
            { courses: id },
            {
                $pull: {
                    courses: id
                }
            }
        );
        // <!-- Delete Course Coupon Code -->
        await CouponCode.deleteMany({ courseId: id });
        // <!-- Delete Course Certificate -->
        await Certificate.deleteMany({ courseId: id });
        // <!-- Delete Course Assignment -->
        await Assignment.deleteMany({ courseId: id });

        // <!-- Delete Course -->
        const result = await Course.findByIdAndDelete({ _id: id });

        if (!result) return res.status(404).json({ error: "No course founded with this id." });

        res.status(200).json({ success: 'Course delete successfully!', data: result });
    } catch (error) {
        next(error)
    }
}

// <!-- Add a new course -->
exports.addCourse = async (req, res, next) => {
    try {
        const {
            title,
            category,
            level,
            description,
            coverImage,
            video,
            requirements,
            price,
        } = req.body;

        let imagePath;

        if (coverImage) {
            const buffer = Buffer.from(
                coverImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
                "base64"
            );

            imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
            try {
                // const cachedJpegDecoder = Jimp.decoders['image/jpeg']
                // Jimp.decoders['image/jpeg'] = (data) => {
                //     const userOpts = { maxMemoryUsageInMB: 1024 }
                //     return cachedJpegDecoder(data, userOpts)
                // }
                const jimpResp = await Jimp.read(buffer);
                jimpResp.resize(600, Jimp.AUTO)
                    .write(
                        path.resolve(__dirname, `../public/images/course/${imagePath}`)
                    );
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        };

        const course = await Course.create({
            title,
            category,
            level,
            description,
            coverImage: `/images/course/${imagePath}`,
            video,
            requirements,
            price,
            students: [],
            sales: 0,
            creator: { id: req.decoded._id, name: req.decoded.name },
            assignments: [],
        });

        const result = await User.updateOne(
            { _id: req.decoded._id },
            { $push: { courses: course._id } }
        );

        res.status(200).json({ data: result, success: "Course added successfully!" });
    } catch (error) {
        next(error);
    }
};

// <!-- Get all courses -->
exports.getAllCourses = async (req, res, next) => {
    try {
        const course = await Course.find({}).populate("creator.id");
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
};

// <!-- Get all courses -->
exports.getTopSalesCourse = async (req, res, next) => {
    try {
        const course = await Course.find()
            .sort({ sales: -1 })
            .limit(10);

        res.status(200).json(course);
        
    } catch (error) {
        next(error);
    }
};