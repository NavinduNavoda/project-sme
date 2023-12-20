import connect from "@/db/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest){

    console.log("[*] login request recieved.")

    try{
      

    }catch(err: any){
        console.log("[-] Err loging in user. " + err.message);
        return NextResponse.json({error: err.message}, {status:500})

    }
}



