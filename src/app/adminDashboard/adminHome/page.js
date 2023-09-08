import React from 'react';
import {AiFillPlusCircle, AiFillThunderbolt} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import Link from "next/link";
import CardSwiper from "@/app/adminDashboard/adminHome/cardSwiper";
import Image from "next/image";
import Charts from "@/app/adminDashboard/adminHome/charts";
import TopCrytoTable from "@/app/adminDashboard/adminHome/topCurrency/topCrytoTable";

const AdminHome = () => {
  return (
    <>
        <div className='flex justify-between m-5 '>
            <div><BiSearch className='text-5xl'></BiSearch></div>
           <div className='flex gap-3 items-center'>
               <Link href='/adminDashboard/notification'><AiFillThunderbolt className='text-5xl'></AiFillThunderbolt></Link>
               <Link href='' className='px-3 py-2 border rounded-lg'>Connect</Link>
           </div>
        </div>

     <div className='gap-5 m-5 md:grid flex-row  md:grid-cols-3'>


    <article className='bg-[#171f2a] rounded-lg p-3 col-span-2 md:w-full w-full gap-5  '>
        {/*card1*/}

        <div className='flex flex-row gap-5 py-3  overflow-x-auto'>
            <>

                    <Image className='relative rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>
                    <p className='absolute top-0 left-0 '>Bitcoin</p>


            </>
            <>
            <Image  className='rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>

        </>

            <>
                <Image  className='rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>

            </>


        </div>

    </article>


         {/*profile section*/}
         <article className='bg-[#171f2a] rounded-lg  p-3 col-span-1'>


<div className='flex justify-center'>
    <Image className='w-20 h-20 mt-10' style={{borderRadius:'100%'}} width={200} height={200} src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' alt=''></Image>

</div>
               <div className='text-center my-5'>
                   <h1>MY BALANCE</h1>
                   <p className='my-2'>$10,86,000</p>

                  <div className='flex justify-center'>
                      <button className='border-dashed border-2 px-3 py-1 rounded-lg border-sky-500 flex items-center '> <AiFillPlusCircle></AiFillPlusCircle> TOP UP BALANCE</button>

                  </div>
               </div>
         </article>

     </div>



        <div>
          <Charts></Charts>
        </div>

        <div className=' mt-20 px-5 container mx-auto'>
            <div className='bg-[#171f2a]'>
                <h1>TOP CRYPTOCURRENCY</h1>

            </div>

            {/* <TopCrytoTable></TopCrytoTable> */}
        </div>

        {/* <div className='my-20'>
            slider section
            <div className="w-1/2 md:w-full">

                <div className="flex flex-row overflow-x-auto gap-4">

                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>
                    <Image className='h-full rounded-lg' width={200} height={200} src='https://static.vecteezy.com/system/resources/thumbnails/007/145/466/small/bitcoin-on-dark-background-banner-template-design-bitcoin-currency-international-stock-exchange-network-bitcoin-marketing-vector.jpg' alt=''></Image>

                </div>
            </div>
        </div> */}

    </>
  );
};

export default AdminHome;