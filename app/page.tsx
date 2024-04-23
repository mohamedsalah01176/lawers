"use client"
import SearchIcon from '@mui/icons-material/Search';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Link from 'next/link';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {

  const baseUr=process.env.NEXT_PUBLIC_REST_BASE_URL
  const [data, setData] = useState<any>([]);

  function getdata(){
    axios.get(`${baseUr}/digital-guide/categories`).then(res=>setData(res.data.data.categories))
  }
  useEffect( () => {
    getdata()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]) 


   function search(searchText:string){
     if(searchText){
       let newItem=data.filter((item:any)=>item.title.indexOf(searchText) !== -1)
       setData(newItem)
    }else{
      getdata()
    }
    
   }



  return (
  <div className="flex flex-col justify-center items-center min-h-[85vh] w-full">
    <h1 className="text-4xl font-bold mb-5">الدليل الرقمي</h1>
    <div className="bg-white border w-[300px]  md:w-[400px] h-[45px]  rounded-lg mb-5">
      <SearchIcon className='text-3xl font-normal'/>
      <input type="text" placeholder=" ادخل العنوان ..." className=" w-[85%] md:w-[90%]  px-3 py-2 outline-none border-none" onChange={(e)=>{search(e.target.value)}}  />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   '>
      {data.map((item:any,index:number)=>{
        return(
          <Link key={index} href={`/${item.id}`} className='bg-[#F9F9F9] shadow-lg min-w-[282px] p-5 h-[270px] flex flex-col justify-center items-center text-black rounded-xl hover:bg-[#DDB762] transition-all duration-300'>
            <Image src={item.image} alt='image' height={100} width={100}  className="rounded-full "/>
            <h1 className='text-xl font-semibold'>{item.title}</h1>
            <p className='font-normal mt-2'>متوفر عدد {item.lawyers_count}</p>
          </Link>
        )
      })}
    </div>
  </div>
  )
}
