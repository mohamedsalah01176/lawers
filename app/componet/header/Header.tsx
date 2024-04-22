
import Image from 'next/image'
import React from 'react'
import Slider from './Slider';
import Link from 'next/link';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 container gap-5 mx-auto relative'>
        <Image src={"/images/page1/logopng 2.png"} alt='image' height={60} width={100}/>
        <div>
            <div className=' gap-x-8 hidden md:flex '>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>الرئيسية</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>من نحن</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>اتصل بنا</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>أرقام التشغيل</Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>الدعم الفني </Link>
                <Link href={"/"} className='transform hover:scale-110 transition-all duration-300'>سياسة الخصوصية</Link>
            </div>
            <Slider/>
        </div>
    </div>
  )
}
