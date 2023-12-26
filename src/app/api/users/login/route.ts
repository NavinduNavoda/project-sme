import connect from "@/db/connect";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { createNewSession } from "@/helpers/sessionHandler/session";
import { getSessionById, saveSession } from "@/helpers/sessionHandler/sessionDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest){

    console.log("[*] login request recieved.")

    //check if already logged in
    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        const session = await getSessionById(jwtToken);
        if(session && session.isVerified){
            return  NextResponse.json({
                message: "Already Signed in",
                success: true,
            },{status: 200});
        }
        
    }

    const {email, password} = await request.json();

    try{
        const user = await User.findOne({email});
        if(!user) throw {message: "Email not registerd."};
        if(!user.isVerified) throw {message: "Email not verified."};
        if(user.password != password) throw {message: "Email and password not matched."};

        const session = await createNewSession(user._id, true);
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



