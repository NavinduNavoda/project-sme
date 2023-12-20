import connect from "@/db/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest){

    console.log("[*] signup request recieved.")

    try{
        const {name, email, password} = await request.json();
        console.log(name, email, password);

        const user = await (new User({
            email,
            password,
            name
        })).save();

        console.log("[+] New user created" + user);

        return NextResponse.json({
            message: "User created.",
            success: true,
            user
        },{status: 200});


    }catch(err: any){
        console.log("[-] Err creating new user. " + err.message);
        return NextResponse.json({error: err.message}, {status:500})

    }
}

export async function GET(request: NextRequest){
    console.log("signup get request");
}


