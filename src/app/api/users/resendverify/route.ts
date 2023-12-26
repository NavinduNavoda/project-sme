import { NextRequest, NextResponse } from "next/server";
import { getSessionById } from "@/helpers/sessionHandler/sessionDB";
import { Session } from "@/helpers/sessionHandler/session";
import { sendVerificationMail } from "@/helpers/mailer";
import connect from "@/db/connect";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import {v4 as uuid_v4} from "uuid";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";

connect();

export async function POST(request: NextRequest){
    
    try{
        const jwtToken = request.cookies.get("session")?.value;        
       
       
        if(!jwtToken) throw "Invalid Token.";
        const session = await getJwtSessionData(jwtToken);

        if(!session) throw "No session saved";
        if(session.isVerified) throw "Already Verified.";

        //get user
        const user = await User.findById(session.uid);
        if(!user) throw "No user saved."
        if(user.isVerified) throw "Already Verified.";

        //removing pre verify tokens
        await UserUpdater.deleteOne({uid:session.uid});

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

        return NextResponse.json({
            message: "Verification email sent.",
            success: true,
        },{status: 200});


    }catch(err:any){
        console.log(err);
        return NextResponse.json({
            message: (typeof err === 'string')? err : "Resend faild",
            success: false,
        },{status: 200});
    }





}