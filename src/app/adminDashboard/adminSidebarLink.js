import Link from 'next/link';
import React from 'react';

const SidebarLink = () => {
  return (
    <div className='flex gap-5 flex-col'>

      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/adminHome' className=''> Home</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/livePricing' className=''> Live Pricing</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/farm' className=''>Farm</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/swap' className=''>Swap</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/liquidity' className=''>Liquidity</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/nfts' className=''>NFTs</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/profile' className=''>Profile</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/vote' className=''>Vote</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/authentication' className=''>Authentication</Link></div>


    </div>
  );
};

export default SidebarLink;