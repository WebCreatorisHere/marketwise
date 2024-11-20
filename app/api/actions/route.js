"use server"
import connectdb from "../../db/connector";
import mongoose from "mongoose";
import Cheese from "../../model/first";
import Contact from "../../model/second";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
    let data = await req.json();
    console.log(data)
    await connectdb()
     const dama = new Cheese({
        name:data.name,
        company:data.company,
        email:data.email,
        message:data.comment
    })

    await dama.save()
    return NextResponse.json({data})
}

export const GET = async(req)=>{
    await connectdb()
   let a = await Cheese.find({})
  return NextResponse.json({data:a.toString()})

    }