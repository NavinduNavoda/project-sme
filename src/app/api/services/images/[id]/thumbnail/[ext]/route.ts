import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

const mime = {
    "gif": 'image/gif',
    "jpg": 'image/jpeg',
    "png": 'image/png',
    "svg": 'image/svg+xml',
}

export async function GET(request: NextRequest, { params }: { params: { id: string, ext: string } }){
    console.log("get req for thumbnail image");
    console.log(params.id);
    console.log(params.ext);

    if(!mime[params.ext as keyof typeof mime]) return NextResponse.json({}, { status: 400 });

    const _id = params.id;
    const filePath = process.cwd()  + "/files/services/" + _id + "/thumbnail." + params.ext;
    const imageBuffer = fs.readFileSync(filePath);

    let res = new NextResponse(imageBuffer);
    res.headers.set('content-type', mime[params.ext as keyof typeof mime]);
    
    return res;
}