import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { writeFile, mkdir, unlink } from "fs/promises";
import {rimraf} from "rimraf";
import Book from "@/models/bookModel";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import connect from "@/db/connect";


connect();

export async function POST(request: NextRequest): Promise<any>{

    console.log("new book post");
    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            if(session && session.isAdmin){
                const data = await request.formData();
                const adminToken = data.get("adminToken");
                if(adminToken && adminToken == session.token){

                    console.log("realUser");

                    const thumbnail: File | null = data.get("thumbnail") as unknown as File;
                    const pic: File | null = data.get("pic") as unknown as File;
                    const file: File | null = data.get("file") as unknown as File;
                    
                    if(!file){
                        console.log("no file recieved")
                        throw "no file";
                    } 
                    
                    const thumbnailExt = thumbnail? thumbnail.name.split('.').pop(): "";
                    const picExt = pic? pic.name.split('.').pop(): "";
                    const fileExt = file? file.name.split('.').pop(): "";
                 

                    //savePost
                    const book = await (new Book({
                        title: data.get("title"),
                        description: data.get("description"),
                        yt: data.get("yt"),
                        price: Number(data.get("price")),
                        content: data.get("content"),
                        top: data.get("top") == "true",
                        thumbnail: thumbnailExt,
                        pic: picExt,
                        file: fileExt
                    })).save();
                    

                    if(thumbnail){
                        let bytes = await thumbnail.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "thumbnail." + thumbnailExt);
                        await writeFile(path, buffer);
                        console.log("thumbnail written");

                    }

                    if(pic){
                        let bytes = await pic.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "pic." + picExt);
                        await writeFile(path, buffer);
                        console.log("pic written");

                    }

                    if(file){
                        let bytes = await file.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "file." + fileExt);
                        await writeFile(path, buffer);
                        console.log("file written");

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

export async function PUT(request: NextRequest): Promise<any>{

    console.log("update request recieved.");

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
                    const file: File | null = data.get("file") as unknown as File;
                    
                    const thumbnailExt = thumbnail? thumbnail.name.split('.').pop(): "";
                    const picExt = pic? pic.name.split('.').pop(): "";
                    const fileExt = file? file.name.split('.').pop(): "";
                    
                    try{
                        if(thumbnail || pic || file){
                            let book = await Book.findOne({_id: data.get("_id")});
                            if(thumbnail){
                                let path = join(process.cwd(), "files/books/" + String(data.get("_id")), "thumbnail" + book.thumbnail);
                                await unlink(path);
                            }
                            if(pic){
                                let path = join(process.cwd(), "files/books/" + String(data.get("_id")), "pic" + book.pic);
                                await unlink(path);
                            }
                            if(file){
                                let path = join(process.cwd(), "files/books/" + String(data.get("_id")), "file" + book.file);
                                await unlink(path);
                            }
                        }
                    }catch(e){
                        console.log(e);
                    }

                    //update post
                    const updateJson: any = {}

                    if(data.get("title")) updateJson["title"] = data.get("title");
                    if(data.get("description")) updateJson["description"] = data.get("description");
                    if(data.get("yt")) updateJson["yt"] = data.get("yt");
                    if(data.get("price")) updateJson["price"] = data.get("price");
                    if(data.get("content")) updateJson["content"] = data.get("content");
                    if(data.get("top")) updateJson["top"] = data.get("top");
                    if(thumbnail) updateJson["thumbnail"] = thumbnailExt;
                    if(pic) updateJson["pic"] = picExt;
                    if(file) updateJson["file"] = fileExt;

                    console.log(updateJson);
                    

                    const book = await Book.findOneAndUpdate({_id: data.get("_id")}, {$set: updateJson});
                   

                    if(thumbnail){
                        let bytes = await thumbnail.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "thumbnail." + thumbnailExt);
                        await writeFile(path, buffer);
                        console.log("thumbnail written");

                    }
                    if(pic){
                        let bytes = await pic.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "pic." + picExt);
                        await writeFile(path, buffer);
                        console.log("pic written");

                    }
                    if(file){
                        let bytes = await file.arrayBuffer();
                        let buffer = Buffer.from(bytes);
                        
                        await mkdir(process.cwd() + "/files/books/" + String(book._id), { recursive: true });
                        let path = join(process.cwd(), "files/books/" + String(book._id), "file." + fileExt);
                        await writeFile(path, buffer);
                        console.log("file written");

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

export async function DELETE(request: NextRequest): Promise<any>{
    console.log("delete request recieved.");

    const jwtToken = request.cookies.get("session")?.value;
    if(jwtToken){
        try{
            const session = await getJwtSessionData(jwtToken);
            if(session && session.isAdmin){
                const data = await request.formData();
                const adminToken = data.get("adminToken");
                if(adminToken && adminToken == session.token){

                    try{
                        let path = join(process.cwd(), "files/books/" + String(data.get("_id")));
                        await rimraf(path);
                    }catch(e){
                        console.log(e);
                    }
                    await Book.deleteOne({_id: data.get("_id")});
                    return NextResponse.json({success: true},{status: 200});
                }
            }
        }catch(err){
            console.log(err);
        }
    }
    return NextResponse.json({},{status: 400});

}


export async function GET(request: NextRequest): Promise<any>{
    const books = await Book.find({});
    return NextResponse.json(books, {status: 200});
}