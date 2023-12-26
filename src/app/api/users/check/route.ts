import { NextRequest, NextResponse } from "next/server";
import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import User from "@/models/userModel";

export async function POST(request: NextRequest){
    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        const session = await getJwtSessionData(jwtToken);
        if(session){
            const user = await User.findById(session.uid);
            if(user) return NextResponse.json({
                message: "ckecked",
                data: {
                    fname: user.fname,
                    lname: user.lname,
                    isVerified: user.isVerified,
                },
                loggedIn: true,
            },{status: 200});
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