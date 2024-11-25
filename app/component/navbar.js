import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const navbar = ({ bg }) => {

  return (
    <nav style={{ "backgroundColor": bg.color, "backdropFilter": bg.bluurr ,"color":bg.navtext}} id='navs' className={`fixed z-[300] top-0 flex justify-between navda`}>
      <Link href={"/"}> <div className="logo flex gap-1 justify-center items-center">
        <Image loading="lazy" style={{"filter":bg.invert}} className='w-10' src="/equippments/logo.svg" alt="" />
        <span className='text-2xl font-[500]'>MarketWise</span>
      </div></Link>
      <ul className='flex gap-7 mt-[0.45rem] '>
        <li style={{ "opacity": bg.display,"top":bg.position }} className='lis hover:text-[#20FFC5] relative transition-colors' ><Link prefetch={true} href={"/grow"} className='chris text-[1.075rem] px-2.5'>YouTube<small className="text-xs absolute top-0.5 ml-0.5 font-normal">Ads</small></Link></li>
        <li style={{ "opacity": bg.display,"top":bg.position }} className='lis hover:text-[#20FFC5] relative transition-colors'><Link prefetch={true} href={"/grow"} className='chris text-[1.075rem] px-2.5'>TikTok<small className="text-xs absolute top-0.5 ml-0.5 font-normal">Ads</small></Link></li>
        <li style={{ "opacity": bg.display,"top":bg.position }} className='lis hover:text-[#20FFC5] relative transition-colors mr-6'><Link prefetch={true} href={"/grow"} className='chris text-[1.075rem] px-2.5'>Spotify<small className="text-xs absolute top-0.5 ml-0.5 font-normal">Promo</small></Link></li>
        <li className='lis hover:text-[#20FFC5] text-[1.075rem] relative transition-colors'><Link prefetch={true} href={"/grow"} className='chris'>Grow your playlist</Link></li>
        <li className='lis hover:text-[#20FFC5] text-[1.075rem] relative transition-colors'><Link prefetch={true} href={"/hello"} className='chris'>Say Hello</Link></li>
      </ul>
    </nav>
  )
}

export default navbar