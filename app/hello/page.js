"use client"
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Bounce } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../hello.css"
import { useRouter } from 'next/navigation'
const HELLOO = () => {
  const { register, handleSubmit, setError, formState: { errors,isSubmitting } } = useForm()
  const [form, setform] = useState({ name: "", email: "", company: "", comment: "" })
  const changer = (e) => {
    setform({ ...form, [e.target.name]: e.target.value }), { required: true, minLength: 3, maxLength: 20 }
  }
  const router = useRouter()

  const delaymaker = (d)=>{
    return new Promise((resolve, reject) => { setTimeout(() => {
      resolve()
    }, d*1000); })
  }
  const submit = async (data) => {
    
  
    await delaymaker(3)
   let a = await fetch(`${process.env.NEXT_PUBLIC_CURR_URL}/api/actions`, {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify(data),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    setform({ name: "", email: "", comment: "", company: "" })
    toast.success('Sent succesfully!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
router.push("/success")
  }

  const handlescrolla = () => {
    console.log("scrolled")
  }
  return (

    <>

      <Navbar bg={{ color: "#0007", bodycolor: "black", bluurr: "blur(9px)", display: "1", invert: "invert(0)", position: "0rem", navtext: "white", usingtext: "white" }} />
      <section onScroll={handlescrolla} className='pb-12 z-20 pt-[7.5rem] gradient text-white'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />   <div className="noise absolute w-full -z-10 top-0 left-0 h-full opacity-[0.07]"></div>
        <div className='bg-[black] relative z-20 gridam bg-opacity-40 py-[85px] px-[95px] box-border max-w-[1224px] w-[95%] rounded-3xl m-auto'>
          <div><h1 className='text-[4.1rem] font-semibold'>Let's talk</h1>
            <p className='text-[2.7rem] w-[420px] leading-[3.3rem]'>Know more about our solutions.</p>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            {errors.name && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'>{errors.name.message}</div>}
            <input {...register("name", { required: {value:true,message:"PLEASE ENTER YOUR NAME"}, minLength: {value:3,message:"Minimum length is 3"}, maxLength: {value:20,message:"Maximum length is 20"} })} onChange={changer} value={form.name} placeholder='Name*' className={`bg-transparent mb-8 focus:placeholder:text-white text-[1.3rem] relative z-20 border px-5 py-3 border-1 rounded-xl w-full ${errors.name?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} type="text" />
            
            {errors.email && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'>{errors.email.message}</div>}
            <input {...register("email", { required: {value:true,message:"PLEASE ENTER YOUR EMAIL"}, minLength: {value:3,message:"Minimum length is 3"}, maxLength: {value:30,message:"Maximum length is 30"} })} onChange={changer} value={form.email} placeholder='Email*' className={`bg-transparent mb-8 focus:placeholder:text-white text-[1.3rem] relative z-20 border px-5 py-3 border-1 rounded-xl w-full ${errors.email?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} type="email" />

            {errors.company && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'>{errors.company.message}</div>}
            <input {...register("company", { required: {value:true,message:"PLEASE ENTER YOUR COMPANY NAME"}, minLength: {value:3,message:"Minimum length is 3"}, maxLength: {value:40,message:"Maximum length is 30"} })} onChange={changer} value={form.company} placeholder='Company*' className={`bg-transparent mb-8 focus:placeholder:text-white text-[1.3rem] relative z-20 border px-5 py-3 border-1 rounded-xl w-full ${errors.company?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} type="text" />

            <textarea {...register("comment")} onChange={changer} value={form.comment} placeholder='Leave us a comment' rows={4} className='border mb-6 border-1 border-[#9A9A9A] w-full rounded-xl py-3 focus:border-white focus:border-[1.8px] focus:placeholder:text-white resize-none text-[1.3rem] px-5 bg-transparent outline-none '></textarea>
            <button disabled={isSubmitting} type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-16 py-3 text-center">{!isSubmitting && "Submit"}{isSubmitting&& "Loading"}</button>
          </form>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default HELLOO