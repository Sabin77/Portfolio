import React from 'react'
import myImage from '../assets/Profile.jpg'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-36 items-center '>
        <div className='mb-10'>
        <p className=' text-white text-[18px] '> Hello there, Welcome to my site</p>
        <p className='  text-white text-[40px] font-bold'>I'm  Sabin Lamichhane</p>
        <p className='  text-red-500 text-[40px] font-bold'>I'm a Front End Developer</p>
        <div className='mt-4'>
            <button className=' text-white text-[12px] mx-1 px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white hover:animate-bounce'>See Portfolio</button>
            <button className=' text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[2px] hover:border-white hover:animate-spin'>Contact me</button>
        </div>
        </div>
        <div className='flex justify-center '>
        <div className='h-[400px] w-[300px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
            <img className='h-full w-[300px] object-cover rounded-[20px]' src={myImage} alt="Profile Photo" />
        </div>
        </div>
    </div>
  )
}
