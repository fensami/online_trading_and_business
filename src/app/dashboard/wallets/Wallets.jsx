"use client" 
import Image from 'next/image';
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import logo from '../../../../public/Bitcoin.png'
import Walletsdata from './Walletsdata';

    const Wallets = () => {


        return (
                <div>
                        <div className='md:flex md:px-12 pr-4 gap-4  mt-10'>
                                <div className='bg-[#212b39] mt-6 md:w-[35%] rounded-lg p-8'>
                                 <div className='flex gap-2 my-3 w-32 mx-auto items-center '>
                                 <Image className='rounded-full' src= {logo} alt='' width={40} height={40}></Image>
                                 <p>Bitcoin</p>
                                 </div>
                                 <div className='text-center my-3'>
                                 <p className='my-3'>Total Balance</p>
                                 <p className='text-3xl font-bold'>0.58485875</p>
                                 <p className='py-3 text-orange-500'>458536.397455 USD</p>
                                 </div>
                                 <div className='text-center my-3'>
                                       <button className='bg-green-600 text-sm px-3 hover:bg-sky-500 mx-3 py-1 rounded-lg'>Withdraw</button>
                                       <button className='bg-black border text-sm px-3 hover:bg-green-500 py-1 rounded-lg'>Deposite</button>
                                 </div>
                                </div>
                                <div className='bg-[#212b39] mt-6 md:w-[65%] p-6 rounded-lg card-body'>
                                <div>
                                <h1>Exchange Balance</h1>
                                <p className='text-2xl my-3 font-bold'>00.253258</p>
                                 <div className='flex my-3 w-full justify-between items-center'>
                                        <p className='text-orange-400'>45,8878930254</p>
                                        <p className='ml-12 text-xs'>+895%</p>
                                 </div>
                                      <div><ProgressBar completed={75}></ProgressBar></div>  
                                </div>
                              
                                <div className='mt-5'>
                                <h1>Exchange Balance</h1>
                                <p className='text-2xl my-3 font-bold'>00.253258</p>
                                 <div className='flex my-3 w-full justify-between items-center'>
                                        <p className='text-orange-400'>45,8878930254</p>
                                        <p className='ml-12 text-xs'>+895%</p>
                                 </div>
                                      <div><ProgressBar completed={90}></ProgressBar></div>  
                                </div>
                                 
                                </div>
                        </div>   
                         <div className='mt-12 bg-[#212b39] md:mx-12 rounded-lg md:px-12 py-8'>
                                <h1 className='text-2xl font-bold mb-4'>Today s Cryptocurrency Prices</h1>
                         <Walletsdata></Walletsdata>
                         </div>
                </div>
        );
};

 export default Wallets;
 
        
  