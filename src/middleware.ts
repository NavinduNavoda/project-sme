import { NextRequest, NextResponse } from "next/server";
import { getSessionById } from "./helpers/sessionHandler/sessionDB";
import connect from "./db/connect";
import getJwtData from "./helpers/sessionHandler/getJwtData";
// import jwt from "jsonwebtoken";


export async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;
    console.log(path);
    const jwtToken = req.cookies.get("session")?.value;

    let isLogedIn = false;
    let isVerified = false;
    let isAdmin = false;
    
    if(jwtToken){
        try{
            const jwtData = await getJwtData(jwtToken);
            isLogedIn = true;
            isVerified = jwtData.isVerified;
            isAdmin = jwtData.isAdmin;
        }catch(err){
            //err in jwt verify
        }
    }

    if(path == "/signup" || path == "/login"){
        if(isLogedIn) return NextResponse.redirect(new URL("/", req.nextUrl));
    }

}



export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/contact",
        "/services",
        "/about"        
    ]
}