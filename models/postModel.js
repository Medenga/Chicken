const mongoose = require("mongoose")

const PostModel = mongoose.model(
    "chicken_api",
    {
        name: {
            type: String,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        steps: {
            type: Number,
            required: true
        },
        isRunning: {
            type: Boolean,
            default: false
        }
    },
    "post"
);

module.exports = { PostModel }