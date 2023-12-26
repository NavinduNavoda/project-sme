import { NextRequest, NextResponse } from "next/server";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { createNewSession } from "@/helpers/sessionHandler/session";
import User from "@/models/userModel";
import { saveSession } from "@/helpers/sessionHandler/sessionDB";

export async function POST(request: NextRequest){
    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            if(session){
                const user = await User.findById(session.uid);
                if(user){ 
                    let res = NextResponse.json({
                        message: "ckecked",
                        data: {
                            fname: user.fname,
                            lname: user.lname,
                            isVerified: user.isVerified,
                        },
                        loggedIn: true,
                    },{status: 200});
                    
                    if(!session.isVerified && session.justVerified){
                        const newSession = await createNewSession(user._id, true);
                        await saveSession(session);

                        res.cookies.set("session", newSession.jwt, {
                            httpOnly: true,
                            sameSite: "lax",
                            maxAge: 1000*60*60*24*365
                        });                

                    }

                    return res;
                }
            }
        }catch(err){

        }
       
    }

    let res = NextResponse.json({
        message: "ckecked",
        loggedIn: false,
    },{status: 200});

    res.cookies.set("session", "", {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000*60*60*24*365
    });

    return res;
}