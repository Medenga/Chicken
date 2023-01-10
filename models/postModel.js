const mongoose = require("mongoose")

const PostModel = mongoose.model(
    "chicken_api",
    {
        name: {
            type: String,
        },
        birthday: {
            type: Date,
        },
        weight: {
            type: Number,
        },
        steps: {
            type: Number,
        },
        isRunning: {
            type: Boolean,
            default: false
        }
    },
    "post"
);

module.exports = { PostModel }