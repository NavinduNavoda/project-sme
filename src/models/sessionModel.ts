import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    sessionId: String,
    token: String,
    uid: {
        type: String,
        unique: true
    },
    jwt: String,
    isVerified: Boolean,
    isAdmin: Boolean,
    justVerified: Boolean,
    expire: Date,
});

const SessionMongo = mongoose.models?.session || mongoose.model("session", sessionSchema);
export default SessionMongo;