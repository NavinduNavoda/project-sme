import getJwtSessionData from "@/helpers/sessionHandler/getJwtSessionData";
import { NextRequest, NextResponse } from "next/server";
import Service from "@/models/serviceModel";
import { join } from "path";
import { writeFile, mkdir, unlink } from "fs/promises";
import { rimraf } from "rimraf";
import connect from "@/db/connect";

connect();

export async function POST(request: NextRequest): Promise<any> {
  const jwtToken = request.cookies.get("session")?.value;
  if (jwtToken) {
    try {
      const session = await getJwtSessionData(jwtToken);
      if (session && session.isAdmin) {
        const data = await request.formData();
        const adminToken = data.get("adminToken");
        if (adminToken && adminToken == session.token) {
          const thumbnail: File | null = data.get(
            "thumbnail"
          ) as unknown as File;
          const pic: File | null = data.get("pic") as unknown as File;

          const thumbnailExt = thumbnail ? thumbnail.name.split(".").pop() : "";
          const picExt = pic ? pic.name.split(".").pop() : "";

          //savePost
          const service = await new Service({
            title: data.get("title"),
            description: data.get("description"),
            yt: data.get("yt"),
            price: Number(data.get("price")),
            content: data.get("content"),
            top: data.get("top") == "true",
            thumbnail: thumbnailExt,
            pic: picExt,
          }).save();

          if (thumbnail) {
            let bytes = await thumbnail.arrayBuffer();
            let buffer = Buffer.from(bytes);
            await mkdir(
              process.cwd() +
                "/files/services/" +
                String(service._id),
              { recursive: true }
            );
            let path = join(
              process.cwd(),
              "files/services/" + String(service._id),
              "thumbnail." + thumbnailExt
            );
            await writeFile(path, buffer);
            console.log("thumbnail written: " + path);
          }
          if (pic) {
            let bytes = await pic.arrayBuffer();
            let buffer = Buffer.from(bytes);

            await mkdir(
              process.cwd() +
                "/files/services/" +
                String(service._id),
              { recursive: true }
            );
            let path = join(
              process.cwd(),
              "files/services/" + String(service._id),
              "pic." + picExt
            );
            console.log(path);
            await writeFile(path, buffer);
            console.log("pic written: " + path);
          }

          return NextResponse.json({ success: true }, { status: 200 });
        } else {
          return NextResponse.json({}, { status: 400 }).cookies.set(
            "session",
            "",
            {
              httpOnly: true,
              sameSite: "lax",
              maxAge: 1000 * 60 * 60 * 24 * 365,
            }
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return NextResponse.json({}, { status: 400 });
}

export async function PUT(request: NextRequest): Promise<any> {
  console.log("update request recieved.");

  const jwtToken = request.cookies.get("session")?.value;
  if (jwtToken) {
    try {
      const session = await getJwtSessionData(jwtToken);
      if (session && session.isAdmin) {
        const data = await request.formData();
        const adminToken = data.get("adminToken");
        if (adminToken && adminToken == session.token) {
          const thumbnail: File | null = data.get(
            "thumbnail"
          ) as unknown as File;
          const pic: File | null = data.get("pic") as unknown as File;

          const thumbnailExt = thumbnail ? thumbnail.name.split(".").pop() : "";
          const picExt = pic ? pic.name.split(".").pop() : "";

          try {
            if (thumbnail || pic) {
              let ser = await Service.findOne({ _id: data.get("_id") });
              if (thumbnail) {
                let path = join(
                  process.cwd(),
                  "files/services/" + String(data.get("_id")),
                  ser.thumbnail
                );
                await unlink(path);
              }
              if (pic) {
                let path = join(
                  process.cwd(),
                  "files/services/" + String(data.get("_id")),
                  ser.pic
                );
                await unlink(path);
              }
            }
          } catch (e) {
            console.log(e);
          }

          //update post
          const updateJson: any = {};

          if (data.get("title")) updateJson["title"] = data.get("title");
          if (data.get("description"))
            updateJson["description"] = data.get("description");
          if (data.get("yt")) updateJson["yt"] = data.get("yt");
          if (data.get("price")) updateJson["price"] = data.get("price");
          if (data.get("content")) updateJson["content"] = data.get("content");
          if (data.get("top")) updateJson["top"] = data.get("top");
          if (thumbnail) updateJson["thumbnail"] = thumbnailExt;
          if (pic) updateJson["pic"] = picExt;

          console.log(updateJson);

          const service = await Service.findOneAndUpdate(
            { _id: data.get("_id") },
            { $set: updateJson }
          );

          if (thumbnail) {
            let bytes = await thumbnail.arrayBuffer();
            let buffer = Buffer.from(bytes);
            await mkdir(
              process.cwd() +
                "/files/services/" +
                String(service._id),
              { recursive: true }
            );
            let path = join(
              process.cwd(),
              "files/services/" + String(service._id),
              "thumbnail." + thumbnailExt
            );
            await writeFile(path, buffer);
            console.log("thumbnail written");
          }
          if (pic) {
            let bytes = await pic.arrayBuffer();
            let buffer = Buffer.from(bytes);

            await mkdir(
              process.cwd() +
                "/files/services/" +
                String(service._id),
              { recursive: true }
            );
            let path = join(
              process.cwd(),
              "files/services/" + String(service._id),
              "pic." + picExt
            );
            console.log(path);
            await writeFile(path, buffer);
            console.log("pic written");
          }

          return NextResponse.json({ success: true }, { status: 200 });
        } else {
          return NextResponse.json({}, { status: 400 }).cookies.set(
            "session",
            "",
            {
              httpOnly: true,
              sameSite: "lax",
              maxAge: 1000 * 60 * 60 * 24 * 365,
            }
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return NextResponse.json({}, { status: 400 });
}

export async function DELETE(request: NextRequest): Promise<any> {
  console.log("delete request recieved.");

  const jwtToken = request.cookies.get("session")?.value;
  if (jwtToken) {
    try {
      const session = await getJwtSessionData(jwtToken);
      if (session && session.isAdmin) {
        const data = await request.formData();
        const adminToken = data.get("adminToken");
        if (adminToken && adminToken == session.token) {
          try {
            let path = join(
              process.cwd(),
              "files/services/" + String(data.get("_id"))
            );
            await rimraf(path);
          } catch (e) {
            console.log(e);
          }
          await Service.deleteOne({ _id: data.get("_id") });

          return NextResponse.json({ success: true }, { status: 200 });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return NextResponse.json({}, { status: 400 });
}

export async function GET(request: NextRequest): Promise<any> {
    const services = await Service.find({});
    return NextResponse.json(services, { status: 200 });
}
