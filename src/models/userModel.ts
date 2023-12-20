import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password."]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;