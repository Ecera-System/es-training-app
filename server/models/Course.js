const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// Schema design
const courseSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Please provide a course title!"],
    },
    category: {
        type: String,
        required: [true, "Category is required!"],
    },
    level: {
        type: String,
        required: [true, "Level is required!"],
        enum: {
            values: ["beginner", "intermediate", "expert"],
            message: "Level value must be beginner/intermediate/expert"
        }
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
    },
    coverImage: {
        type: String,
        required: [true, "Cover Image is required!"],
    },
    video: {
        type: String,
        required: [true, "Video url is required!"],
    },
    requirements: {
        type: Array,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
        default: 0
    },
    students: {
        type: [ObjectId],
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: 'pending',
    },
    creator: {
        name: {
            type: String,
            trim: true
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "User"
        }
    },
    assignments: {
        type: [ObjectId],
        ref: 'Assignment'
    },
    certificate: {
        type: String,
    },
}, {
    timestamps: true,
});


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
