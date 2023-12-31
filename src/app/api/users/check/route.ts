import { NextRequest, NextResponse } from "next/server";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { createNewSession } from "@/helpers/sessionHandler/session";
import User from "@/models/userModel";
import { saveSession } from "@/helpers/sessionHandler/sessionDB";

export async function POST(request: NextRequest): Promise<any>{
    const jwtToken = request.cookies.get("session")?.value;
    let res = NextResponse.json({},{status: 200});

    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            if(session){
                const user = await User.findById(session.uid);
                if(user){ 
                    res = NextResponse.json({
                        message: "ckecked",
                        data: {
                            fname: user.fname,
                            lname: user.lname,
                            isVerified: user.isVerified,
                        },
                        loggedIn: true,
                    },{status: 200});
                    
                    if(!session.isVerified && session.justVerified){
                        const newSession = await createNewSession(user._id.toString(), true, user.isAdmin);
                        await saveSession(newSession);

                        res.cookies.set("session", newSession.jwt, {
                            httpOnly: true,
                            sameSite: "lax",
                            maxAge: 1000*60*60*24*365
                        });                

                    }

                    return res;
                }else{
                    console.log("ckeck no user");
                }
            }
        }catch(err: any){
            // console.log(err);
            if(err.code == 11000){
                console.log("session build error - already exist");
                return res;
            }else{
                console.log(err);
            }
        }
       
    }

    res = NextResponse.json({
        message: "ckecked",
        loggedIn: false,
        data:{
            fname: "",
            lname: "",
            isVerified: false
        }
    },{status: 200});

    res.cookies.set("session", "", {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000*60*60*24*365
    });

    return res;
}