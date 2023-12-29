import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { nanoid } from "nanoid";
import { setToken } from "@/helpers/sessionHandler/sessionDB";

export async function POST(request: NextRequest){
    const jwtToken = request.cookies.get("session")?.value;

    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            const {adminPassword} = await request.json();

            if(session && session.isAdmin){
                const user = await User.findById(session.uid);
                if(user && user.isAdmin){
                    const passMatch = await bcryptjs.compare(adminPassword, user.adminPassword);
                    if(passMatch){
                        const adminToken = nanoid();
                        await setToken(session.sessionId, adminToken);
                        return NextResponse.json({adminToken},{status: 200});
                    }

                }
            }


        }catch(err){
            console.log(err);
        }
    }

    return NextResponse.json({adminToken: ""},{status: 200});

}