import Link from 'next/link';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const SidebarLink = () => {
  return (
    <div className='flex gap-5 flex-col'>

      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/adminHome' className=''> Home</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/livePricing' className=''> Live Pricing</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/farm' className=''>Farm</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/swap' className=''>Swap</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/liquidity' className=''>Liquidity</Link></div>

      <div className='border p-3 rounded-xl'>
        <details>
          <summary className='cursor-pointer'>NFTs</summary>
          <ul className="p-2 text-right">
            <li><Link href='/adminDashboard/explore-nfts' className='flex items-center'> <FaDotCircle></FaDotCircle>Explore NFTs</Link></li>
            <li><Link href='/adminDashboard/create-nfts' className='flex items-center my-2'> <FaDotCircle></FaDotCircle>Create NFTs</Link></li>
            <li><Link href='/adminDashboard/details-nfts' className='flex items-center'> <FaDotCircle></FaDotCircle>NFTs Details</Link></li>
             
          </ul>
        </details>
       </div>

     

      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/profile' className=''>Profile</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/vote' className=''>Vote</Link></div>
      <div className='border p-3 rounded-xl'><Link href='/adminDashboard/authentication' className=''>Authentication</Link></div>


    </div>
  );
};

export default SidebarLink;