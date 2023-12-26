import getJwtData from "./getJwtData";
import { getSessionById } from "./sessionDB";


export default async function getJwtSessionData(token: string){
    if(!token || token == "") return null;
    try{
        const jwtData = await getJwtData(token);
        return await getSessionById(jwtData.sid);
    }catch(err){
        throw "error in getting jwt session"
    }
}