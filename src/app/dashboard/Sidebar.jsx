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
  <div className='flex my-2 bg-[#212b39] flex-col bg-slate-500 w-1/6 text-white p-5 gap-5'>


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
   
  );
};

export default Sidebar;