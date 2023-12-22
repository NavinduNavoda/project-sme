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

const UserUpdater = mongoose.models.userupdater || mongoose.model("userupdater", userUpdaterSchema);
export default UserUpdater;