'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import logoB from '../../public/Bitcoin.png';
import binance from '../../public/binance.png'
import dugecoin from '../../public/dugecoin.png'
import PriceData from './prices/PriceData';

 
 
      const dataa = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
       

 
const Prices = () => {
        return (
                <div className='mt-12'>
       <div className=' md:flex'>

                <div className='md:px-10 md:py-8 py-6 px-8 ml-10 md:mx-8 bg-[#171f2a] my-6'>
                    <div className='flex justify- items-center'>
                          <h1>| Bitcoin <br /> <span className='text-xl text-orange-500 font-semibold'>$3040.5806</span></h1> 
                           <Image src={logoB} width={40} height={40} alt=''></Image>  
                     </div>
                        
                       <AreaChart
                                width={200}
                                height={60}
                                data={dataa}
                                margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                                }}
                                >
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                       </AreaChart>
                </div> 
                <div className='md:px-10 md:py-8 py-6 px-8 ml-10 md:mx-8 bg-[#171f2a] my-6'>
                <div className='flex justify-between items-center'>
                          <h1>| Dugecoin <br /> <span className='text-xl text-orange-500 font-semibold'>$6670.5603</span></h1> 
                           <Image className='rounded-full' src={dugecoin} width={40} height={40} alt=''></Image>  
                     </div>   
                       <AreaChart
                                width={200}
                                height={60}
                                data={dataa}
                                margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                                }}
                                >
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                       </AreaChart>
                </div> 
                <div className='md:px-10 md:py-8 py-6 px-8 ml-10 md:mx-8 bg-[#171f2a] my-6'>
                <div className='flex justify-between items-center'>
                          <h1>| Binance <br /> <span className='text-xl text-orange-500 font-semibold'>$7404.5845</span></h1> 
                           <Image className='rounded-full' src={binance} width={40} height={40} alt=''></Image>  
                     </div>   
                       <AreaChart
                                width={200}
                                height={60}
                                data={dataa}
                                margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                                }}
                                >
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                       </AreaChart>
                </div> 
                
       </div>  
            <PriceData></PriceData>   
               </div>
        );
};

export default Prices;