import {jwtVerify} from "jose";

export default async function getJwtData(token: string){
    try{
        const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return verified.payload as {sid: string, isVerified: boolean, isAdmin: boolean}
    }catch(err){
        console.log(err);
        throw "jwt verify faild."
    }
}