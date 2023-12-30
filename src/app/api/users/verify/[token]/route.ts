import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import connect from "@/db/connect";
import { getSessionByUserId, makeJustVerified } from "@/helpers/sessionHandler/sessionDB";

connect();

export async function GET(req: NextRequest, { params }: { params: { token: string } }): Promise<any> {
    //todo:: ddos protect
    try{
        const userUpdater = await UserUpdater.findOne({verifyToken: params.token});
        if(!userUpdater) throw "Invalid verify token.";
        await UserUpdater.deleteOne({_id: userUpdater._id});

        if(userUpdater.verifyTokenExpiry < new Date()) throw "verify token expired.";

        // const user = await User.findOne({_id: userUpdater.userId});
        const user = await User.findOneAndUpdate({_id: userUpdater.userId}, {$set: {isVerified: true}});
        if(!user) throw "Invalid verify token.";

        const session = await getSessionByUserId(user._id);
        if(session){
            await makeJustVerified(session.sessionId)
        }else{
            console.log("no session when verify");
        }

        console.log("[+] " + user._id + " verified.");

        return NextResponse.redirect(new URL("/verification/success", req.nextUrl));

    }catch(err: any){
        console.log("err verifing user " + err.message);
        return NextResponse.redirect(new URL("/verification/unsuccess", req.nextUrl));
    }
}