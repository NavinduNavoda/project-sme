import { Session } from "./session"
import SessionMongo from "@/models/sessionModel"

const renewToMins = 60 * 24 * 2;


export const saveSession = async (session: Session) => {
    //delete pre sessions if exist
    await SessionMongo.deleteMany({uid: session.uid});
   
    const ses = await (new SessionMongo({
        sessionId: session.id,
        uid: session.uid,
        token: session.token,
        jwt: session.jwt,
        isVerified: session.isVerified,
        isAdmin: session.isAdmin,
        expire: session.expire,
        justVerified: session.justVerified,
    })).save();
}

export const makeJustVerified = async (id: string) => {
    // console.log("justver : " + id);
    // const ses = await SessionMongo.findOne({sessionId: id});
    // console.log(JSON.stringify(ses));
    await SessionMongo.updateOne({sessionId: id}, {$set: {justVerified: true}});
}

export const getSessionById = async (id: string) => {
    const ses =  await SessionMongo.findOne({sessionId: id});
    if(!ses) return null;
    if(ses.expire < new Date()) {
        await deleteSessionById(ses.sessionId);
        return null;
    }
    await SessionMongo.updateOne({sessionId: id}, {$set: {expire: new Date(new Date().getTime() + (renewToMins * 60 * 1000))}});
    return ses;
}

export const getSessionByUserId = async (uid: string) => {
    const ses =  await SessionMongo.findOne({uid: uid});
    if(!ses) return null;
    if(ses.expire < new Date()) {
        await deleteSessionById(ses.sessionId);
        return null;
    }
    await SessionMongo.updateOne({uid: uid}, {$set: {expire: new Date(new Date().getTime() + (renewToMins * 60 * 1000))}});
    return ses;
}

export const renewSession = async (id: string) => {
    await SessionMongo.updateOne({sessionId: id}, {$set: {expire: new Date(new Date().getTime() + (renewToMins * 60 * 1000))}});
}

export const renewAndGetById = async (id: string) => {
    return await SessionMongo.findByIdAndUpdate({sessionId: id}, {$set: {expire: new Date(new Date().getTime() + (renewToMins * 60 * 1000))}}); 
}

export const renewAndGetByUserId = async (id: string) => {
    return await SessionMongo.findByIdAndUpdate({uid: id}, {$set: {expire: new Date(new Date().getTime() + (renewToMins * 60 * 1000))}}); 
}

export const deleteSessionById = async (id: string) => {
    await SessionMongo.deleteMany({sessionId: id});

}

export const deleteSessionByuserId = async (uid: string) => {
    await SessionMongo.deleteMany({uid: uid});
}