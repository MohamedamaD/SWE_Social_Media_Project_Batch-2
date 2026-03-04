const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // User schema with required fields
        username: {
        type: String,
        required: true,
        unique: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        },
        password: {
        type: String,
        required: true,
        },
        profilePicture: {
        type: String,
        default: "",
        },
        bio: {
        type: String,
        default: "",
        },
        accountStatus: {
        type: String,
        enum: ["Active", "Suspended", "Deleted"],
        default: "Active",
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
