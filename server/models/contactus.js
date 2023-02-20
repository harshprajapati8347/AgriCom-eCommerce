const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("ContactUs", contactUsSchema);

