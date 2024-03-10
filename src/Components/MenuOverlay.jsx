import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MenuOverlay({menuList}) {
  const navigate = useNavigate();
  return (
    <div className=' absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
     {menuList.map((item)=>(
        <h1 className='text-white text-[24px] mb-6 justify-center mt-10
        hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer' onClick={()=>navigate(item.path)}>{item.title}</h1>
     ))}   
    </div>
  )
}
