/* eslint-disable @next/next/no-async-client-component */
"use client"
import SearchIcon from '@mui/icons-material/Search';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default  function Lawyer({params}:any) {
  const [dataDetails,setDataDetails]=useState<any>([]);
  const baseUr=process.env.NEXT_PUBLIC_REST_BASE_URL
  const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY

  const id=params.lawyer 
    
    async function getdata(id2:string){
      const response:any = await axios.create({baseURL:baseUr,headers:{Authorization:`Bearer ${apiKey}`}}).post(`/digital-guide/search?category_id=${id2}`,id2)
      let dataaxios= response.data;
      setDataDetails(dataaxios.data.lawyers);
    }

    useEffect( () => {
      getdata(id)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])

     
     function search(searchText:string){
      if(searchText){
        let newItem=dataDetails.filter((item:any)=>item.name.indexOf(searchText) !== -1)
        setDataDetails(newItem)
     }else{
       getdata(id)
     }
     
    }
  return ( 
  <div className="flex flex-col justify-center items-center min-h-[85vh] w-full">
    <h1 className="text-4xl font-bold mb-5"> محامي مرخص</h1>
    <div className="bg-white border w-[300px]  md:w-[400px] h-[45px]  rounded-lg mb-5">
      <SearchIcon className='text-3xl font-normal'/>
      <input type="text" placeholder=" ادخل العنوان ..." className=" w-[85%] md:w-[90%]  px-3 py-2 outline-none border-none" onChange={(e)=>{search(e.target.value)}}  />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-5 '>
      {dataDetails.map((item:any,index:number)=>{
        return(
          <Link href={`/prof/${item.id}`} key={index} className='bg-[#F9F9F9] shadow-lg min-w-[282px]  h-[310px] flex flex-col justify-center items-center text-black rounded-xl hover:bg-[#DDB762] transition-all duration-300 p-5'>
            <Image src={`${item.photo}`} alt='image' height={130} width={130} className='rounded-full mb-5'/>
            <h1 className='text-xl font-semibold'><VerifiedIcon className='text-blue-600'/>{item.name}</h1>
            <p className='text-sm text-slate-500 flex items-center my-1'> <Image src={"/images/page2/crown.png"} className='mr-1' height={20} width={20} alt={"image"}/> {item.about}</p>
            <p className='font-normal mt-2'>4.56 (35 مراجعة) <StarIcon className='text-yellow-400'/></p>
          </Link>

        )
      })}
      
    </div>
  </div>
  )
}
