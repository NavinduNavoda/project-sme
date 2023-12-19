import mongoose from "mongoose";

const userUpdaterSchema = new mongoose.Schema({ 
    userId: {
        type: String,
        required: true,
        unique: true
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

});

const UserUpdater = mongoose.models.users || mongoose.model("userupdaters", userUpdaterSchema);
export default UserUpdater;