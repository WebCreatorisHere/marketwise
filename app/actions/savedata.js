"use server"
import connectdb from "../db/connector";
import Cheese from "../model/first";
import Contact from "../model/second";

export const saver = async(data)=>{
    await connectdb()
     const dama = new Cheese({
        name:data.name,
        company:data.company,
        email:data.email,
        message:data.comment
    })

    await dama.save()
}

export const contactsaver = async(data)=>{
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
}