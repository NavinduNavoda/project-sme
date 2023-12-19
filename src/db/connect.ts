import mongoose from "mongoose";

export default async function connect(){

    try{

        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on("connected", ()=>{
            console.log("[+] Succesfully Connected to DB.");
        });

        connection.on("error", (err)=>{
            console.log("[-] Something went wrong with DB : " + err);
        });

    }catch(err){
        console.log("[-] Something went wrong connecting to DB.");
        console.log(err);
    }

}