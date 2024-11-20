"use client"
import React, { useState } from 'react'
import Navbar from '../component/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useForm } from 'react-hook-form'
import Footer from '../component/footer'
import Link from 'next/link'
import "../hello.css"
import { useRouter } from 'next/navigation';

const GROW = () => {
  const url = process.env.NEXT_PUBLIC_CURR_URL
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm()
  const [form, setform] = useState({})
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const router = useRouter()
  const delaymaker = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, t * 1000);
    })
  }
  const onsubmit = async (data) => {
    await delaymaker(3)
    let a = await fetch("/api/actions", {

      // Adding method type
      method: "PUT",
  
      // Adding body or contents to send
      body: JSON.stringify(data),
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    setform({})
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
  return (
    <>
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
      />
      <Navbar bg={{ color: "#141414", bodycolor: "black", bluurr: "blur(0px)", display: "1", invert: "invert(0)", position: "0rem", navtext: "white", usingtext: "white" }} />
      <section className='w-full mt-[6rem]'>
        <div className='text-[3.5rem] py-5 pb-8 text-center font-semibold bg-[#141414] text-white'>Grow your playlist</div>
        <h3 className='text-[2.4rem] py-10 mb-10 font-medium text-center'>Define your product!</h3>
        <div className="area w-[43rem] m-auto">
          <h5 className='text-2xl font-medium p-5'>About you and your art.</h5>
          <form onSubmit={handleSubmit(onsubmit)}>
            {errors.name && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'> {errors.name.message}</div>}
            <input onChange={handlechange} value={form.name} {...register("name", { required: { value: true, message: "PLEASE ENTER YOUR NAME" } })} className={`border mb-7 focus:placeholder:text-black placeholder:text-[#9A9A9A] font-medium w-full rounded-xl py-[0.70rem] px-5 text-[1.35rem] border-1 border-[#9a9a9a] ${errors.name?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} placeholder='Name*' type="text" />
            
            {errors.company && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'> {errors.company.message}</div>}
            <input onChange={handlechange} value={form.company} {...register("company", { required: { value: true, message: "PLEASE ENTER YOUR COMPANY" } })} className={`border mb-7 focus:placeholder:text-black placeholder:text-[#9A9A9A] font-medium w-full rounded-xl py-[0.70rem] px-5 text-[1.35rem] border-1 border-[#9a9a9a] ${errors.company?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} placeholder='Company*' type="text" />
            
            {errors.email && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'> {errors.email.message}</div>}
            <input onChange={handlechange} value={form.email} {...register("email", { required: { value: true, message: "PLEASE ENTER YOUR EMAIL" } })} className={`border mb-7 focus:placeholder:text-black placeholder:text-[#9A9A9A] font-medium w-full rounded-xl py-[0.70rem] px-5 text-[1.35rem] border-1 border-[#9a9a9a] ${errors.email?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} placeholder='Email*' type="email" />
            
            {errors.budget && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'> {errors.budget.message}</div>}
            <input onChange={handlechange} value={form.budget} {...register("budget", { required: { value: true, message: "PLEASE ENTER YOUR BUDGET" } })} className={`border mb-7 focus:placeholder:text-black placeholder:text-[#9A9A9A] font-medium w-full rounded-xl py-[0.70rem] px-5 text-[1.35rem] border-1 border-[#9a9a9a] ${errors.budget?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} placeholder='Budget*' type="text" />
            
            {errors.playlists && <div className='text-[#ff6b6b] mx-3 text-sm font-semibold'> {errors.playlists.message}</div>}
            <input onChange={handlechange} value={form.playlists} {...register("playlists", { required: { value: true, message: "PLEASE ENTER YOUR PLAYLIST NUMBER" } })} className={`border mb-7 focus:placeholder:text-black placeholder:text-[#9A9A9A] font-medium w-full rounded-xl py-[0.70rem] px-5 text-[1.35rem] border-1 border-[#9a9a9a] ${errors.playlists?"border-[#ff6b6b] border-[2px]":"border-[#9a9a9a]"}`} placeholder='Number of playlists*' type="number" />
            
            <textarea onChange={handlechange} value={form.comment} {...register("comment")} placeholder='Leave us a comment' rows={4} className='border mb-7 border-1 placeholder:text-[#9A9A9A] border-[#9A9A9A] w-full rounded-xl py-3 focus:border-white focus:border-[1.8px] focus:placeholder:text-black resize-none px-5 bg-transparent text-[1.35rem] font-medium'></textarea>
            <button disabled={isSubmitting} type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-lg px-16 py-3 text-center mx-[30%]">{isSubmitting && "LOADING..."}{!isSubmitting && "CONTACT NOW"}</button>

          </form>
          <p className=' text-lg py-20 pb-28 text-center font-semibold'>Any doubts? look at this <Link href={"/"} className='underline'>frequently asked questions.</Link></p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default GROW