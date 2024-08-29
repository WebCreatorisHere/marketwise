import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className='bg-[#0F0F0F] w-full gap-[11rem] px-32 py-10 flex pb-[4.5rem]'>
      <div className="brand text-white flex flex-col gap-3">
        <Link href={"/"}> <div className="logo flex gap-1 justify-center items-center">
          <img className='w-10' src="/equippments/logo.svg" alt="" />
          <span className='text-2xl font-[500]'>MarketWise</span>
        </div></Link>
        <p className='text-sm font-medium text-[#636265]'>Contact:</p>
        <p className='text-sm font-medium text-[#636265]'>pratibhad.amit@gmail.com</p>
        <p className='text-sm font-medium text-[#636265]'>9086053659</p>
        <div className="icons flex gap-4 items-center mt-3" >
        <Link href={"#"} className='hover:invert'><img src="https://www.marketwise.io/icons/in.svg" alt="" /></Link>
        <Link href={"#"} className='hover:invert'><img src="https://www.marketwise.io/icons/yt.svg" alt="" /></Link>
        <Link href={"#"} className='hover:invert'><img src="https://www.marketwise.io/icons/tiktok.svg" alt="" /></Link>
        <Link href={"#"} className='hover:invert'><img src="https://www.marketwise.io/icons/ig.svg" alt="" /></Link>
        </div>
        </div>
      <div className="about flex flex-col justify-end gap-1.5">
      <p className='text-sm font-medium text-[#636265]'>© 2020 MarketWise TM </p>
      <p className='text-sm font-medium text-[#636265]'>Marketwise is part of Zil Global LLC, all rights reserved. The logo and other Zil marks are trademarks and may be registered.</p>
      </div>
      <div className="links flex flex-col gap-4 min-w-60 justify-end">
        <div className='flex flex-col gap-1.5 underline'><Link className='text-sm underline font-medium text-[#636265]' href={"#"}>Help Desk</Link>
        <Link className='text-sm underline font-medium text-[#636265]' href={"#"}>Privacy and Cookies Policy</Link>
        </div> <Link className='text-sm font-medium text-[#636265]' href={"#"}>Design by DISRUPTIVE</Link>
      </div>
    </footer>
  )
}

export default footer