"use client"
import React, { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export default function Price({dataDetails}:any) {
    const [slide,setSlide]=useState <string>("price")

  return (
    <div>
        <div className='flex items-center gap-5 pb-5 border-b justify-center '>
                <button onClick={()=>setSlide("price")}  className={`text-[18px] ${slide === "price"?"text-[#2B4868]":"text-[#A3A4A5]"} cursor-pointer`}>أسعار الخدمات</button>
                <button onClick={()=>setSlide("time")}  className={`text-[18px] ${slide === "time"?"text-[#2B4868]":"text-[#A3A4A5]"} cursor-pointer`}>أوقات العمل</button>
        </div>
        {
            slide==="price"?
            <>
                {dataDetails?.services.map((item:any,index:number)=>{
                    return(
                        <div key={index} className='bg-[#F9F9F9] mt-4 p-4 rounded-lg '>
                            <div className='flex items-center gap-5 '>
                                <div className=' w-[70%]'>
                                    <p className='text-[#2C4768] text-[14px] font-semibold'><PhoneIcon className='text-[#DDB762]'/> {item.title}</p>
                                    <p className='text-[#B0B0B0] text-[12px] mr-7'>{item.intro}</p>
                                </div>
                                <div className='bg-[#F9F9F9] w-[30%]'>
                                    <p className='text-[12px]'>سعر الخدمة</p>
                                    <p className='text-[#3FD06F] text-[20px]'>{item.ymtaz_price} ر.س</p>
                                </div>
                            </div>
                            <button className='text-[16px] bg-[#DDB762] text-white py-2 px-4 w-full rounded-lg mt-5 hover:bg-[#b89751] transition-all duration-300'>طلب الخدمة</button>
                        </div>

                    )
                })}
                <div className='bg-[#F9F9F9] mt-4 p-4 rounded-lg '>
                    <div className='flex items-center gap-5 '>
                        <div className=' w-[70%]'>
                            <p className='text-[#2C4768] text-[14px] font-semibold'><PlayCircleOutlinedIcon  className='text-[#DDB762]'/> خدمة الاستشارة المرئية</p>
                            <p className='text-[#B0B0B0] text-[12px] mr-7'>ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة</p>
                        </div>
                        <div className='bg-[#F9F9F9] w-[30%]'>
                            <p className='text-[12px]'>سعر الخدمة</p>
                            <p className='text-[#3FD06F] text-[20px]'>300 ر.س</p>
                        </div>
                    </div>
                    <button className='text-[16px] bg-[#DDB762] text-white py-2 px-4 w-full rounded-lg mt-5 hover:bg-[#b89751] transition-all duration-300'>طلب الخدمة</button>
                </div>
                <div className='bg-[#F9F9F9] mt-4 p-4 rounded-lg '>
                    <div className='flex items-center gap-5 '>
                        <div className=' w-[70%]'>
                            <p className='text-[#2C4768] text-[14px] font-semibold'><ModeEditOutlinedIcon className='text-[#DDB762]'/> خدمة الاستشارة المكتوبة</p>
                            <p className='text-[#B0B0B0] text-[12px] mr-7'>ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة</p>
                        </div>
                        <div className='bg-[#F9F9F9] w-[30%]'>
                            <p className='text-[12px]'>سعر الخدمة</p>
                            <p className='text-[#3FD06F] text-[20px]'>300 ر.س</p>
                        </div>
                    </div>
                    <button className='text-[16px] bg-[#DDB762] text-white py-2 px-4 w-full rounded-lg mt-5 hover:bg-[#b89751] transition-all duration-300'>طلب الخدمة</button>
                </div>
            </>
            :
            <>
                <div className='bg-[#F9F9F9] mt-4 p-4 rounded-lg flex gap-3  justify-center'>
                    <div className='w-[130px] text-center'>
                        <h1 className='h-[40px] bg-[#DDB762] py-2 px-5 text-[16px] rounded-t-lg text-white'>اليوم</h1>
                        <p className='text-[#A3A4A5] text-[16px] translate-y-[100%]'>لا يوجد مواعيد متاحة</p>
                    </div>
                    <div className='w-[130px] text-center'>
                        <h1 className='h-[40px] bg-[#DDB762] py-2 px-2 rounded-t-lg text-white text-[16px]'>غدا</h1>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] text-[16px] bg-[#DDB762] mt-1 w-fit rounded-lg mx-auto p-1'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                        </div>
                    </div>
                    <div className='w-[130px] text-center'>
                        <h1 className='h-[40px] bg-[#DDB762] py-2 px-2  rounded-t-lg text-white text-[15px] '>الاثنين 02/03</h1>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] text-[16px] bg-[#DDB762] mt-1 w-fit rounded-lg mx-auto p-1'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                            <p className='text-[#A3A4A5] text-[16px]'>10:00 ص</p>
                        </div>
                    </div>
                </div>
            </>
        }
        
    </div> 
  )
}
