'use client'
import Link from 'next/link';
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';
import { GiPriceTag,GiCrossedChains } from 'react-icons/gi';
import { LiaWalletSolid } from 'react-icons/lia';
import { MdOutlinePercent } from 'react-icons/md';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { TbSettings,TbBrandOauth } from 'react-icons/tb';


// import { GiCrossedChains } from 'react-icons/tb';


// import NavLink from "./NavLink";
const dashboardLinks  =[
  {
    path: '/dashboard',
    title: 'Dashboard',
  }
]


const Sidebar = () => {
  return (
  <div className='bg-[#212b39]'>
   

<p className='text-center mt-5 text-2xl font-bold'>OTBA</p>
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}

    </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 

    <div className='flex my-2 w-52  flex-col text-white p-4 gap-5'>


<p className='border p-3 rounded-xl'><Link href='/dashboard' className='flex gap-2 items-center ' ><MdDashboardCustomize></MdDashboardCustomize> Dashboard</Link></p>

<p className='border p-3 rounded-xl'><Link className='flex gap-2 items-center ' href='/dashboard/exchange'> <FaExchangeAlt></FaExchangeAlt> Exchange</Link></p>

<p className='border p-3 rounded-xl'>
<Link href='/dashboard/prices' className='flex gap-2 items-center'> <GiPriceTag></GiPriceTag> Prices</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/wallets' className='flex gap-2 items-center'><LiaWalletSolid></LiaWalletSolid>Wallets</Link>
</p>


<p className='border p-3 rounded-xl'>
  <Link href='/dashboard/promotions' className='flex gap-2 items-center'><MdOutlinePercent></MdOutlinePercent> Promotions</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/activities' className='flex gap-2 items-center' ><TbActivityHeartbeat></TbActivityHeartbeat> Activities</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/notifications' className='flex gap-2 items-center'><MdOutlineNotificationsActive></MdOutlineNotificationsActive> Notifications</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/settings' className='flex gap-2 items-center'> <TbSettings></TbSettings> Settings</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/utilities' className='flex gap-2 items-center'> <GiCrossedChains></GiCrossedChains> Utilities</Link>
</p>


<p className='border p-3 rounded-xl' >
<Link href='/dashboard/authentication' className='flex gap-2 items-center'> <TbBrandOauth></TbBrandOauth> Authentication</Link>
</p>

</div>


      
  
  </div>
</div>
  </div>
   
  );
};

export default Sidebar;