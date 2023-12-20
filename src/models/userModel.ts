import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please enter your first name."]
    },
    lname: {
        type: String,
        required: [true, "Please enter your last name."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email."],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: [true, "Please enter your password."]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.models.users || mongoose.model("user", userSchema);
export default User;