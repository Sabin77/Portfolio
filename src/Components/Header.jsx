import React, { useState } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiCrossedBones } from "react-icons/gi";
import MenuOverlay from './MenuOverlay';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate=useNavigate();
    const [toggle, setToggle] = useState(false);
    const menuList=[
        {
            id:1,
            title:'HOME',
            path:'/'
        },
        {
            id:2,
            title:'ABOUT',
            path:'/about'
        },
        {
            id:3,
            title:'SERVICE',
            path:'/service'
        },
        {
            id:4,
            title:'PORTFOLIO',
            path:'/portfolio'
        },
        {
            id:5,
            title:'CONTACT',
            path:'contact'
        }
    ]

  return (
    <div className='flex justify-between'>
        <h2 className=' text-[20px] font-serif text-white'>SABIN
         <span className=' text-red-500 px-2 '>LAMICHHANE</span></h2>
         <div className='hidden md:flex gap-10 ' >
            {menuList.map((item)=>(
                <div key={item.id} onClick={()=>navigate(item.path)}>
                    <h2 className=' text-white text-[15px] border-transparent border-[1px] hover:border-red-500  rounded-full px-3 py-1 cursor-pointer'>{item.title}</h2>
                </div>
            ))}
                 <h2 className=' text-white text-[15px]  border-white border-[1px]  rounded-full px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500'>Hire Me</h2>

         </div>
         <div className='md:hidden'>
            {!toggle? 
            (<HiBars3BottomRight onClick={()=>setToggle(!toggle)} className=' text-white text-[22px] cursor-pointer'/>) 
            : (<GiCrossedBones onClick={()=>setToggle(!toggle)} className=' text-white text-[22px] cursor-pointer'/>)
             }
             {toggle? <MenuOverlay menuList={menuList}/>:null}
         </div>
    </div>
  )
}
