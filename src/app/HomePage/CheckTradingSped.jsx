import React from 'react';

const CheckTradingSped = () => {
  return (
    <div className='text-center'>
      <h1 className='text-xl'>All spreads are indicative. To view real-time spreads, please refer to your terminal.</h1>

   <div className='flex items-center gap-5 my-5 justify-center'>
   <button className='btn btn-outline btn-accent'>Check Trading Specs</button>
   <button className="btn btn-active btn-accent">Trade Now</button>
   </div> 
      
    </div>
  );
};

export default CheckTradingSped;