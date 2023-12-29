import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { NextRequest, NextResponse } from "next/server";
import Service from "@/models/serviceModel";
import { join } from "path";
import { writeFile, mkdir } from "fs/promises";


export async function POST(request: NextRequest){
    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            if(session && session.isAdmin){
                const data = await request.formData();
                const adminToken = data.get("adminToken");
                if(adminToken && adminToken == session.token){

                    const thumbnail: File | null = data.get("thumbnail") as unknown as File;
                    const pic: File | null = data.get("pic") as unknown as File;
                    
                    const thumbnailExt = thumbnail? thumbnail.name.split('.').pop(): "";
                    const picExt = pic? pic.name.split('.').pop(): "";
                    
                    //savePost
                    const service = await (new Service({
                        title: data.get("title"),
                        description: data.get("description"),
                        yt: data.get("yt"),
                        price: Number(data.get("price")),
                        content: data.get("content"),
                        top: Boolean(data.get("top")),
                        thumbnail: "thumbnail." + thumbnailExt,
                        pic: "pic" + picExt
                    })).save();
                    

                    if(thumbnail){
                        let bytes = await thumbnail.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        await mkdir(process.cwd() + "/public/uploaded/" + String(service._id), { recursive: true });
                        let path = join(process.cwd(), "public/uploaded/" + String(service._id), "thumbnail." + thumbnailExt);
                        await writeFile(path, buffer);
                        console.log("thumbnail written");

                    }
                    if(pic){
                        let bytes = await pic.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        
                        await mkdir(process.cwd() + "/public/uploaded/" + String(service._id), { recursive: true });
                        let path = join(process.cwd(), "public/uploaded/" + String(service._id), "pic." + picExt);
                        console.log(path)
                        await writeFile(path, buffer);
                        console.log("pic written");

                    }
                    
                    return NextResponse.json({success: true},{status: 200});


                }else{
                    return NextResponse.json({},{status: 400}).cookies.set("session", "", {
                        httpOnly: true,
                        sameSite: "lax",
                        maxAge: 1000*60*60*24*365
                    });
                }
            }
        }catch(e){
            console.log(e);
        }
    }


    return NextResponse.json({},{status: 400});

}


export async function GET(request: NextRequest){
    console.log("services get req");
    const services = await Service.find({});
    console.log(services);
    return NextResponse.json(services, {status: 200});
}