"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


export default function Slider() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <div className='block md:hidden hover:scale-125 transition-all duration-300 cursor-pointer' onClick={()=>setOpen(!open)}><MenuIcon className='text-4xl  font-semibold '/></div>
        {open &&
            <div className='w-full min-h-300px absolute top-full left-0 bg-black/50 text-center flex flex-col gap-5 text-lg z-10 p-3 text-white md:hidden'>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>الرئيسية</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>من نحن</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>اتصل بنا</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>أرقام التشغيل</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>الدعم الفني </Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>سياسة الخصوصية</Link>
            </div>
        }
    </div>
  )
}
