import React from 'react';
import { BiCoin } from 'react-icons/bi';

const DashboardCard = () => {
  return (
    <div className='md:flex  justify-between gap-5 '>
      <article className='bg-[#171f2a] rounded-xl w-60 flex justify-between items-center px-5 py-3'>
        <div className='mt-2'>
        <h1 className='text-xl font-semibold'>Bitcoin</h1>
        <p className='my-3 text-xl font-semibold'>$1200</p>
        </div>
        <BiCoin className='text-5xl'></BiCoin>
      </article>
      <article className='bg-[#171f2a] rounded-xl w-60 flex justify-between items-center px-5 py-3'>
        <div className='mt-2'>
        <h1 className='text-xl font-semibold'>Ethereum</h1>
        <p className='my-3 text-xl font-semibold'>$100</p>
        </div>
        <BiCoin className='text-5xl'></BiCoin>
      </article>
      <article className='bg-[#171f2a] rounded-xl w-60 flex justify-between items-center px-5 py-3'>
        <div className='mt-2'>
        <h1 className='text-xl font-semibold'>Dogecoin</h1>
        <p className='my-3 text-xl font-semibold'>$2500</p>
        </div>
        <BiCoin className='text-5xl'></BiCoin>
      </article>
      <article className='bg-[#171f2a] rounded-xl w-60 flex justify-between items-center px-5 py-3'>
        <div className='mt-2'>
        <h1 className='text-xl font-semibold'>Binance</h1>
        <p className='my-3 text-xl font-semibold'>$3200</p>
        </div>
        <BiCoin className='text-5xl'></BiCoin>
      </article>
    
     
    </div>
  );
};

export default DashboardCard;