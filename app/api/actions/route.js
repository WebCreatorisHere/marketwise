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
     const chama = new Contact({
         name:data.name,
         company:data.company,
         email:data.email,
         budget:data.budget,
         playlists:data.playlists,
         comment:data.comment
        })
        
        await chama.save()
        return NextResponse.json({success:true,message:"done"})
    }