import { Session } from "./session"
import SessionMongo from "@/models/sessionModel"



export const saveSession = async (session: Session) => {
    const ses = await (new SessionMongo({
        sessionId: session.id,
        uid: session.uid,
        token: session.token,
        isVerified: session.isVerified,
        isAdmin: session.isAdmin
    })).save();
}

export const getSessionById = async (id: string) => {
    return await SessionMongo.findOne({sessionId: id});
}

export const getSessionByUserId = async (uid: string) => {
    return await SessionMongo.findOne({uid: uid});
}

export const renewSession = async (id: string) => {
    // go with redis
}

export const deleteSessionById = async (id: string) => {
    await SessionMongo.deleteOne({sessionId: id});
}

export const deleteSessionByuserId = async (uid: string) => {
    await SessionMongo.deleteOne({uid: uid});
}