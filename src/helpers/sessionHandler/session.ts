import {v4 as uuid_v4} from "uuid"
// import jwt from "jsonwebtoken"
import {SignJWT} from "jose";
import {nanoid} from "nanoid"

const createdExpireMins = 60 * 24 * 2;

export class Session {
    constructor(public uid: string, public id: string, public token: string, public jwt:string, public isVerified: boolean, public isAdmin: boolean, public expire: Date){}
}


export const createNewSession = async (uid: string, isVerified: boolean): Promise<Session> =>{
    //create sessionId
    const sid = uuid_v4();

    //jwt
    // const jwtToken = jwt.sign({sid, isVerified, isAdmin: false}, process.env.JWT_SECRET!, {expiresIn: 60*60*24*365});
    const jwtToken = await new SignJWT({sid, isVerified, isAdmin: false})
    .setProtectedHeader({alg: "HS256"})
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("365d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    return new Session(uid, sid, "", jwtToken, isVerified, false, new Date(new Date().getTime() + (createdExpireMins * 60 * 1000)) );
}

export const createAdminSession = async (uid: string): Promise<Session> =>{
    //create sessionId
    const sid = uuid_v4();

    //create token
    const token = uuid_v4();

    //jwt
    // const jwtToken = jwt.sign({sid, isVerified: true, isAdmin: true}, process.env.JWT_SECRET!, {expiresIn: 60*60*24*365});
    const jwtToken = await new SignJWT({sid, isVerified: true, isAdmin: true})
    .setProtectedHeader({alg: "HS256"})
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("365d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    
    return new Session(uid, sid, token, jwtToken, true, true, new Date(new Date().getTime() + (createdExpireMins * 60 * 1000)));
}