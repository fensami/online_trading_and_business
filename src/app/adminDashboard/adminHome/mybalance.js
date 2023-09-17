import Image from 'next/image';
import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

const Mybalance = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <Image className='w-20 h-20 mt-10' style={{ borderRadius: '100%' }} width={200} height={200} src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' alt=''></Image>

      </div>
      <div className='text-center my-5'>
        <h1>MY BALANCE</h1>
        <p className='my-3 text-3xl font-semibold'>$10,86,000</p>

        <div className='flex justify-center'>
          <button className='border-dashed border-2 bg-slate-200 px-3 py-1 rounded-lg border-sky-500 font-semibold text-black flex items-center gap-4'> <AiFillPlusCircle></AiFillPlusCircle> TOP UP BALANCE</button>

        </div>
      </div>
    </div>
  );
};

export default Mybalance;