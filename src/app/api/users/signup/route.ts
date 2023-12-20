import connect from "@/db/connect";
import User from "@/models/userModel";
import UserUpdater from "@/models/userUpdaterModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

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

        //if user already exist.
        const preUser = await User.findOne({email});
        if(preUser){
            console.log("[*] user already exist.");

            if(!preUser.isVerified) User.deleteOne({email});  // todo:::
        }


        //creating new user
        const user = await (new User({
            email,
            password,
            fname,
            lname
        })).save();
        console.log("[+] New user created : " + user._id);

        //creating verification
        const salt = await bcryptjs.genSalt()
        const verifyTokenString = await bcryptjs.hash(user._id, salt); //created string to check incoming verify request.
        const userUpdater = await (new UserUpdater({
            userId: user._id,
            verifyToken: verifyTokenString,
            verifyTokenExpiry : new Date(new Date().getTime() + (30*60*1000)), //giving 30 mins.
        })).save();
        console.log("[+] New Verify Token Created : " + userUpdater._id);

        //sending verify email


        return NextResponse.json({
            message: "User created.",
            success: true,
        },{status: 200});


    }catch(err: any){
        console.log("[-] Err creating new user. " + err.message);
        handleErrors(err);
        return NextResponse.json({...handleErrors(err), success: false}, {status:400});

    }
}




