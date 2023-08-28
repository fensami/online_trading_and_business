import Link from 'next/link';
import React from 'react';

const SidebarLink = () => {
  return (
    <div className='flex gap-5 flex-col'>
       
   <div className='border p-3 rounded-xl'><Link href='/adminDashboard/adminHome' className=''> Home</Link></div>
   <div className='border p-3 rounded-xl'><Link href='/adminDashboard/livePricing' className=''> Live Pricing</Link></div>
   
  
    </div>
  );
};

export default SidebarLink;