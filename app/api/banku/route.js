import { NextResponse } from "next/server";
import connectdb from "@/app/db/connector";
import Contact from "../../model/second";
export const POST = async(req)=>{
    let data = await req.json();
    await connectdb()
    const dama = new Contact({
        name:data.name,
        company:data.company,
        email:data.email,
        comment:data.comment,
        playlists:data.playlists,
        budget:data.budget
    })

    await dama.save()
    console.log(data)
    return NextResponse.json({data})

    }
export const GET = async(req)=>{
    await connectdb()
   let a = await Contact.find({})
   return NextResponse.json({a})

    }
