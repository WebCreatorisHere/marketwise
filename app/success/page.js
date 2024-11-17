"use client"
import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Link from 'next/link'

const SUCCESS = () => {
  return (
    <>
      <Navbar bg={{ color: "#0007", bodycolor: "black", bluurr: "blur(9px)", display: "1", invert: "invert(0)", position: "0rem", navtext: "white", usingtext: "white" }} />
      <section className='w-full flex justify-center items-center h-[100vh] relative'>
      <div className="noise absolute w-full z-10 top-0 left-0 h-full opacity-[0.07]"></div>
      <div className="suck absolute w-full bg-cover -z-10 top-0 left-0 h-full opacity-[1]"></div>
        <div className='text-white z-50 relative'>
            <h1 className='text-[2.5rem] font-medium leading-[3.8rem] text-center w-[38rem]'>Thanks for choosing Wises. <br/>Our team will contact you soon.
            </h1>
            <h3 className='text-center text-xl mt-5'>Know more about <span className='text-[#1dfbc5] lis relative after:bottom-[-3px] after:h-[1px]'><Link href={"/"}>our services.</Link></span></h3>
        </div>
    </section>
<Footer/>
    </>
  )
}

export default SUCCESS