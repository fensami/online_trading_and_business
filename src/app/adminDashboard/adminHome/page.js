import React from 'react';
import { AiFillPlusCircle, AiFillThunderbolt } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import CardSwiper from "@/app/adminDashboard/adminHome/cardSlider";
import Image from "next/image";
import Charts from "@/app/adminDashboard/adminHome/charts";
import TopCrytoTable from "@/app/adminDashboard/adminHome/topCurrency/topCrytoTable";
import Mybalance from './mybalance';
import CardSlider from '@/app/adminDashboard/adminHome/cardSlider';

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


{/* card and Profile section */}
            <div className='m-5 md:grid flex-row  md:grid-cols-3 gap-5'>


                <article className='bg-[#171f2a] rounded-lg p-3 col-span-2 md:w-full w-full gap-3  '>
                    {/*card1*/}

                   <CardSlider></CardSlider>

                </article>


                {/*profile section*/}
                <article className='bg-[#171f2a] rounded-lg  p-3 col-span-1 mt-5 md:mt-0'>


                   <Mybalance></Mybalance>
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

            

        </>
    );
};

export default AdminHome;