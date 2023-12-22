import { NextRequest, NextResponse } from "next/server";
import { getSessionById } from "@/helpers/sessionHandler/sessionDB";
import { Session } from "@/helpers/sessionHandler/session";
import { sendVerificationMail } from "@/helpers/mailer";
import connect from "@/db/connect";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import {v4 as uuid_v4} from "uuid";

connect();

export async function POST(request: NextRequest){
    
    try{
        const sesId = request.cookies.get("session")?.value;        
       
        console.log("ses Id : " + sesId);
        if(!sesId) throw "Invalid session. sesId";
       
        const {token} = await request.json();
        console.log("tokenId : " + token);
        if(!token) throw "Invalid session. Token";

        const session = await getSessionById(sesId);
        if(!session) throw "Invalid Session. No session saved";
        if(session.isVerified) throw "Already Verified.";

        console.log("session.token : " + session.token);

        if(session.token != token) throw "Invalid Token";

        //get user
        const user = await User.findById(session.uid);
        if(!user) throw "No user saved."

        //removing pre verify tokens
        UserUpdater.deleteOne({uid:session.uid});

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
            message: "Resend faild",
            success: false,
        },{status: 200});
    }





}