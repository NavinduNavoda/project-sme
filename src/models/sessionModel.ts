import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    sessionId: String,
    token: String,
    uid: String,
    isVerified: Boolean,
    isAdmin: Boolean
});

const SessionMongo = mongoose.models.session || mongoose.model("session", sessionSchema);
export default SessionMongo;