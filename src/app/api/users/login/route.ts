import connect from "@/db/connect";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { createNewSession} from "@/helpers/sessionHandler/session";
import { getSessionById, saveSession } from "@/helpers/sessionHandler/sessionDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { GitPullRequestArrow } from "lucide-react";

connect();

export async function POST(request: NextRequest){

    console.log("[*] login request recieved.")

    
    //check if already logged in
    try{
        const jwtToken = request.cookies.get("session")?.value;
        if(jwtToken){
            const session = await getJwtSessionData(jwtToken);
            if(session){
                console.log("already logged");
                return  NextResponse.json({
                    message: "Already logged in",
                    success: true,
                },{status: 200});
            }else{
                throw "no session"
            }
        }else{
            throw "no token"
        }
    }catch(err){
        console.log("login jwt : " + err);
    }
    const {email, password} = await request.json();

    try{
        const user = await User.findOne({email});
        if(!user) throw {message: "Email not registerd."};
        // if(!user.isVerified) throw {message: "Email not verified."};

        const passMatch = await bcryptjs.compare(password, user.password);
        if(!passMatch) throw {message: "Email and Password not matched."};

        const session = await createNewSession(user._id.toString(), user.isVerified, user.isAdmin);
        await saveSession(session);

        let res = NextResponse.json({
            message: "logged in",
            success: true,
        },{status: 200});

        res.cookies.set("session", session.jwt, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000*60*60*24*365
        });


        return res;


    }catch(err: any){
        console.log("[-] Err loging in user. " + err.message);
        return NextResponse.json({error: err.message, success: false}, {status:200})

    }
}



