import {v4 as uuid_v4} from "uuid"

export class Session {
    constructor(public uid: string, public id: string, public token: string, public isVerified: boolean, public isAdmin: boolean){}
}


export const createNewSession = (uid: string, isVerified: boolean, isAdmin: boolean): Session =>{
    //create sessionId
    const sid = uuid_v4();

    //create token
    const token = uuid_v4();

    return new Session(uid, sid, token, isVerified, isAdmin);
}