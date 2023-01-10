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
            default: Date.now
        },
        weight: {
            type: Number,
            required: true
        },
        steps: {
            type: Number,
            default: 0
        },
        isRunning: {
            type: Boolean,
            default: false
        }
    },
    "post"
);

module.exports = { PostModel }