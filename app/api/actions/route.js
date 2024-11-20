"use server"
import connectdb from "../../db/connector";
import Cheese from "../../model/first";
import Contact from "../../model/second";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
    let data = await req.json();
    await connectdb()
     const dama = new Cheese({
        name:data.name,
        company:data.company,
        email:data.email,
        message:data.comment
    })

    await dama.save()
    return NextResponse.json({success:true,message:"done"})
}

export const PUT = async(req)=>{
    let data = await req.json();
    await connectdb()
    await Contact.create(data)
    console.log(data)
    return NextResponse.json(data)

    }
export const GET = async(req)=>{

        return NextResponse.json({success:true,message:"done"})
    }