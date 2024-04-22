"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Price from '../../componet/price/Price';
import axios from 'axios';
import VerifiedIcon from '@mui/icons-material/Verified';



export default  function page({params}:any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dataDetails,setDataDetails]=useState<any>();
    const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY
    const id=params.profile
    async function getdata(){
        const response:any =  await axios.create({baseURL:"https://ymtaz.sa/api/client",headers:{Authorization:`Bearer ${apiKey}`}}).get(`/lawyer/${id}`)
        let dataaxios=await response.data;
        setDataDetails(dataaxios.data.lawyer);
      }
      //eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect( () => {
        getdata()
       // eslint-disable-next-line react-hooks/exhaustive-deps
       },[])
  return (
    <div className='md:flex justify-between gap-5 container mx-auto'>
        <div className='w-full md:w-[60%] flex flex-col gap-4 '>
            <div className='bg-white min-h-[364px] p-5 rounded-lg'>
                <h1 className='text-2xl font-bold mb-8 mt-2'>المعلومات الشخصية</h1>
                <div className='flex  gap-3 '>
                    <div className='relative'><VerifiedIcon className='text-blue-600 absolute top-1'/><Image src={dataDetails?.photo?dataDetails?.photo:"/images/page2/crown.png"} className='rounded-full' alt="image" height={100} width={100}/></div>
                    <div>
                        <h1 className='text-xl font-semibold'>{dataDetails?.name}</h1>
                        <p className='flex gap-1 text-sm text-[#A3A4A5] my-2'>{dataDetails?.about}<Image src={"/images/page2/crown.png"} alt='image' height={20} width={20}/></p>
                        <div className='flex gap-2 items-center'>
                            <Rating name="read-only" value={5} readOnly className='text-[#E2A03F]'/>
                            <p className='text-[14px] text-[#A3A4A5]'>5.00  التقييم العام من 154 من العملاء</p>
                            <p className='text-sm'>اظهر التقييمات</p>
                        </div>
                        <div className='bg-[#F9F9F9] p-4 mt-10 rounded-lg '>
                            <p><FormatQuoteIcon/> {dataDetails?.services[1]?.intro}</p>
                            <div className='flex items-center gap-2 mt-5'>
                            <Rating name="read-only" value={5} readOnly className='text-[#E2A03F]' />
                                <p className='text-sm text-[#A3A4A5]'>Abdullah Faleh</p>
                                <p  className='text-sm text-[#A3A4A5]'>الخميس 3 فبراير 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg p-5'>
                <h1 className='text-2xl font-bold'>النبذة التعريفية</h1>
                <p className='text-sm text-[#A3A4A5] mt-2'>{dataDetails?.services[0]?.intro}</p>
            </div>
            <div className='bg-white p-5 rounded-lg mb-2'>
                <h1 className='text-2xl font-bold mb-5 mt-3'>تقييم العملاء:</h1>
                <div className='flex justify-between '>
                    <div className='text-center'>
                        <Rating name="read-only" value={5} readOnly className='text-3xl text-[#E2A03F]' />
                        <p className='text-[20px] text-[#A3A4A5]'>التقييم العام</p>
                        <p className='text-[16px] text-[#A3A4A5]'>من 154 من العملاء</p>
                    </div>
                    <div className='text-center'>
                        <Rating name="read-only" value={5} readOnly className='text-3xl text-[#E2A03F]' />
                        <p className='text-[20px] text-[#A3A4A5]'>تقييم المنصة</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-3 '>
                        <p className='w-[70px] bg-[#E2A03F] p-2 rounded-lg text-white text-xl text-center'>5/5</p>
                        <p className='text-[20px] text-[#A3A4A5]'>تقييم الاستشاري</p>
                    </div>

                </div>
            </div>
            <div>
                <div className='flex items-center p-5 bg-white rounded-lg mb-1'>
                    <div className='w-[70%]'>
                        <Rating name="read-only" value={5} readOnly className='text-    xl text-[#E2A03F]' />
                        <p className='text-[16px] text-[#A3A4A5]'>التقييم العام</p>
                        <p className='text-[16px] text-[#A3A4A5] mt-3 mb-2'>“ {dataDetails?.services[2]?.intro}</p>
                        <p className='text-[12px] text-[#A3A4A5]'>عبد الله فالح </p>
                        <p className='text-[12px] text-[#A3A4A5]'>الخميس 3 فبراير 2024</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-3 w-[30%] '>
                            <p className='w-[50px] bg-[#E2A03F] p-2 rounded-lg text-white text-xl text-center'>5</p>
                            <p className='text-[20px] text-[#A3A4A5]'>تقييم الاستشاري</p>
                    </div>
                </div>
                <div className='flex items-center p-5 bg-white rounded-lg'>
                    <div className='w-[70%]'>
                        <Rating name="read-only" value={5} readOnly className='text-    xl text-[#E2A03F]' />
                        <p className='text-[16px] text-[#A3A4A5]'>التقييم العام</p>
                        <p className='text-[16px] text-[#A3A4A5] mt-3 mb-2'>“ {dataDetails?.services[3]?.intro}</p>
                        <p className='text-[12px] text-[#A3A4A5]'>عبد الله فالح </p>
                        <p className='text-[12px] text-[#A3A4A5]'>الخميس 3 فبراير 2024</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-3 w-[30%] '>
                            <p className='w-[50px] bg-[#E2A03F] p-2 rounded-lg text-white text-xl text-center'>5</p>
                            <p className='text-[20px] text-[#A3A4A5]'>تقييم الاستشاري</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full md:w-[40%] bg-white  rounded-lg h-[500px] md:h-[900px]'>
            <h1 className='text-[28px] font-semibold mb-5 p-6'>معلومات الحجز</h1>
            
            <div className='px-4'>
                <Price dataDetails={dataDetails}/>
            </div>
        </div>
    </div>
  )
}
