import React from 'react';
import {AiFillThunderbolt} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import Link from "next/link";
import CardSwiper from "@/app/adminDashboard/adminHome/cardSwiper";
import Image from "next/image";

const AdminHome = () => {
  return (
    <>
        <div className='flex justify-between m-5'>
            <div><BiSearch className='text-5xl'></BiSearch></div>
           <div className='flex gap-3 items-center'>
               <Link href='/adminDashboard/notification'><AiFillThunderbolt className='text-5xl'></AiFillThunderbolt></Link>
               <Link href='' className='px-3 py-2 border rounded-lg'>Connect</Link>
           </div>
        </div>
     <div className='grid md:grid-cols-3  gap-5 m-5'>
        {/*<article className='bg-accent-content/20 col-span-2 p-3 gap-3 grid grid-cols-3'>*/}
            {/*<CardSwiper></CardSwiper>*/}
        {/*</article>*/}


    <article className='bg-accent-content/20 col-span-2 p-3  gap-3  grid grid-cols-2'>
        {/*card1*/}
        <div >
            <h1 className='absolute'>BitCoin</h1>
            <Image className='h-full rounded-lg' width={500} height={400} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
        </div>

        <div className=''>
            <h1 className='absolute '>BNB</h1>
            <Image className='h-full' width={500} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>

        </div>
    </article>

         <article className='bg-[#171f2a] p-3'>
hello
         </article>
     </div>
        <div>

        </div>
    </>
  );
};

export default AdminHome;