import React from 'react';

const RecentTransaction = () => {
  return (
    <div className='bg-[#171f2a] px-3 w-1/4 py-5'>
      <h1 className='text-center text-xl font-bold'>Recent Transaction</h1>

      <article className='flex justify-between items-center mt-5'>
        <p>img</p>

        <div>
         <p> Bitcoin</p>
         <p>Today, 3.50 PM</p>
        </div>
        <p>$47,515</p>
        
      </article>
      
    </div>
  );
};

export default RecentTransaction;