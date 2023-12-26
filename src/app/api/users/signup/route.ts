import connect from "@/db/connect";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuid_v4} from "uuid";
import { sendVerificationMail } from "@/helpers/mailer";

import { Session, createNewSession } from "@/helpers/sessionHandler/session";
import { saveSession, getSessionById } from "@/helpers/sessionHandler/sessionDB";

import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";

connect();


const handleErrors = (err: any) => {

    let error: any = {}
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach((e: any) => {
            error[e.properties.path] = e.properties.message;
        });
    }

    //dublicate error
    if(err.code === 11000){
        error["email"] = "This email already registerd."
    }

    console.log(error);
    return error;
}


export async function POST(request: NextRequest){

    console.log("[*] signup request recieved.")

    try{
        //check if already logged in
        const jwtToken = request.cookies.get("session")?.value;
        if(jwtToken && await getJwtSessionData(jwtToken)){
            return  NextResponse.json({
                message: "Already Signed in",
                success: true,
            },{status: 200});
        }

    }catch(err){

    }


    const {fname, lname, email, password} = await request.json();

    try{

        const preUser = await User.findOne({email});
        if(preUser) throw {message: "user validation failed", errors: [{properties:{ path: "email", message: "This email already registerd." }}]}

        //creating new user
        const user = await (new User({
            email,
            password,
            fname,
            lname
        })).save();
        console.log("[+] New user created : " + user._id);

        //creating verification
        let verifyTokenString = uuid_v4(); //created string to check incoming verify request.
        verifyTokenString = verifyTokenString.replace(/\//g, "@");
        
        const userUpdater = await (new UserUpdater({
            userId: user._id,
            verifyToken: verifyTokenString,
            verifyTokenExpiry : new Date(new Date().getTime() + (30*60*1000)), //giving 30 mins.
        })).save();
        console.log("[+] New Verify Token Created : " + userUpdater._id);

        //sending verify email
        await sendVerificationMail(user.email, process.env.API_URL! + "/api/users/verify/" + userUpdater.verifyToken);

        const session = await createNewSession(user._id, false);
        await saveSession(session);

        let res = NextResponse.json({
            message: "User created. Verification email sent.",
            success: true,
        },{status: 200});

        res.cookies.set("session", session.jwt, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000*60*60*24*365
        });


        return res;


    }catch(err: any){
        console.log("[-] Err creating new user. " + err.message);
        return NextResponse.json({...handleErrors(err), success: false}, {status:200});

    }
}




