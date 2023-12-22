import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";
import bcryptjs from "bcryptjs";


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
        required: [true, "Please enter your password."],
        minlength: [6, "Minumum password lenght is 6 characters."],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }

});

userSchema.pre("save", async function(next){
    const salt = await bcryptjs.genSalt();
    this.password = await bcryptjs.hash(this.password, salt);
    next();
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;