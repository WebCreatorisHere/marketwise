"use server"
import connectdb from "../../db/connector";
import mongoose from "mongoose";
import Cheese from "../../model/first";
import Contact from "../../model/second";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
    let data = await req.json();    
     
    return NextResponse.json({success:true,message:"done"})
}

export const GET = async(req)=>{
    await connectdb()
   let a = await Cheese.find()
   NextResponse.json({data:a.toString()})

    }