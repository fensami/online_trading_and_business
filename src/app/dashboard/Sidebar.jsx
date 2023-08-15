import Link from 'next/link';
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';


// import NavLink from "./NavLink";
const dashboardLinks  =[
  {
    path: '/dashboard',
    title: 'Dashboard',
  }
]


const Sidebar = () => {
  return (
  <div >

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  {/* <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg> */}
    </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 

    <div className='flex my-2 w-52 bg-[#212b39] flex-col text-white p-4 gap-5'>


<p className='border p-3 rounded-xl'><Link href='/dashboard'>Dashboard</Link></p>

<p className='border p-3 rounded-xl'><Link className='flex gap-2 items-center' href='/dashboard/exchange'> <FaExchangeAlt></FaExchangeAlt> exchange</Link></p>

<p className='border p-3 rounded-xl'>
<Link href='/dashboard/prices'>Prices</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/wallets'>wallets</Link>
</p>


<p className='border p-3 rounded-xl'>
  <Link href='/dashboard/promotions'>Promotions</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/activities'>Activities</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/notifications'>Notifications</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/settings'>Settings</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/utilities'>Utilities</Link>
</p>


<p className='border p-3 rounded-xl'>
<Link href='/dashboard/authentication'>Authentication</Link>
</p>

</div>


      
  
  </div>
</div>
  </div>
   
  );
};

export default Sidebar;