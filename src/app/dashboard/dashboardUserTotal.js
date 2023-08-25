import React from 'react';
import DashboardUserTotalChart from './dashboardUserTotalChart';

const DashboardUserTotal = () => {
  return (
    <div className='bg-[#171f2a] md:w-full w-fit px-5 py-4  text-center'>
      <DashboardUserTotalChart></DashboardUserTotalChart>
     <div className='mt-5'>
     <h1 className='text-2xl font-bold'>Total Balance</h1>
      <h2 className='text-xl font-semibold'>0.3475948</h2>
      <p>11,032.24 USD</p>
      <button className='btn mt-5'>WithDraw</button>
      </div>
    </div>
  );
};

export default DashboardUserTotal;