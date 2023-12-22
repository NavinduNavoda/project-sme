import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import connect from "@/db/connect";

connect();

export async function GET(req: NextRequest, { params }: { params: { token: string } }) {
    //todo:: ddos protect
    try{
        const userUpdater = await UserUpdater.findOne({verifyToken: params.token});
        if(!userUpdater) throw "Invalid verify token.";
        await UserUpdater.deleteOne({_id: userUpdater._id});

        if(userUpdater.verifyTokenExpiry.getTime() < new Date().getTime()) throw "verify token expired.";

        const user = await User.findOneAndUpdate({_id: userUpdater.userId}, {isVerified: true});
        if(!user) throw "Invalid verify token.";

        console.log("[+] " + user._id + " verified.");


        return NextResponse.json({
            message: "User verified.",
            success: true,
        });

    }catch(err: any){
        console.log("err verifing user " + err.message);
        return NextResponse.json({  
            message: err,
            success: false, 
        });
    }
}