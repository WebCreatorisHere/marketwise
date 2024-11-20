import { NextResponse } from "next/server";
import connectdb from "@/app/db/connector";
import Contact from "../../model/second";
export const POST = async(req)=>{
    let data = await req.json();
    await connectdb()
    await Contact.create(data)
    console.log(data)
    return NextResponse.json(data)

    }
export const GET = async(req)=>{
    await connectdb()
   let a = await Contact.findOne({})
   NextResponse.json({data:a.toString()})

    }
