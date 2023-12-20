import connect from "@/db/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

connect();


const handleErrors = (err: any) => {

    let error: any = {}
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach((e: any) => {
            error[e.properties.path] = e.properties.message;
        });
    }
    console.log(error);

    return error;
}


export async function POST(request: NextRequest){

    console.log("[*] signup request recieved.")

    try{
        const {fname, lname, email, password} = await request.json();

        const user = await (new User({
            email,
            password,
            fname,
            lname
        })).save();

        console.log("[+] New user created" + user);

        return NextResponse.json({
            message: "User created.",
            success: true,
            user
        },{status: 200});


    }catch(err: any){
        // console.log("[-] Err creating new user. " + err.message);
        handleErrors(err);
        return NextResponse.json({error: err.message}, {status:500})

    }
}

export async function GET(request: NextRequest){
    console.log("signup get request");
}


