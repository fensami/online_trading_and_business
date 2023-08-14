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
    <div>



      <ul>
        {
         dashboardLinks.map((path, title) => <li key={path}>
          <Link href={path} >{title}</Link></li>)
          
        }
        
      <Link href='/'>home</Link>
      <Link href='/'>home</Link>
      <Link href='/'>home</Link>
      <Link href='/'>home</Link>
      <Link href='/'>home</Link>
      </ul>





      <div className='flex flex-col bg-slate-500 w-1/6 text-white p-5 gap-5'>


<p className='border p-3 rounded-xl'><Link href='/dashboard'>Dashboard</Link></p>

<p className='border p-3 rounded-xl'><Link className='flex gap-2 items-center' href='/dashboard/exchange'> <FaExchangeAlt></FaExchangeAlt> exchange</Link></p>


<Link href='/dashboard/prices'>Prices</Link>



<Link href='/dashboard/wallets'>wallets</Link>



<Link href='/dashboard/promotions'>Promotions</Link>



<Link href='/dashboard/activities'>Activities</Link>



<Link href='/dashboard/notifications'>Notifications</Link>



<Link href='/dashboard/settings'>Settings</Link>



<Link href='/dashboard/utilities'>Utilities</Link>



<Link href='/dashboard/authentication'>Authentication</Link>

</div>
    </div>
  );
};

export default Sidebar;