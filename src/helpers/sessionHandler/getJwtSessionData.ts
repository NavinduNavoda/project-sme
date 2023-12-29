import getJwtData from "./getJwtData";
import { getSessionById } from "./sessionDB";


export default async function getJwtSessionData(token: string){
    if(!token || token == "") return null;
    try{
        const jwtData = await getJwtData(token);
        console.log("jwt json data : " + jwtData);
        return await getSessionById(jwtData.sid);
    }catch(err){
        throw err
    }
}