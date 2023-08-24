import Link from 'next/link';
import React from 'react';

const SidebarLink = () => {
  return (
    <>
       
   <div className='border p-3 rounded-xl'><Link href='/dashboard' className='flex gap-2 items-center ' > Dashboard</Link></div>
   
   <div className='border p-3 rounded-xl'><Link className='flex gap-2 items-center ' href='/dashboard/exchange'>  Exchange</Link></div>

   <div className='border p-3 rounded-xl'><Link className='flex gap-2 items-center ' href='/dashboard/forex'>  Forex</Link></div>
   <div className='border p-3 rounded-xl'><Link className='flex gap-2 items-center ' href='/dashboard/marketsOverviews'>  Markets Overview</Link></div>
   
    <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/prices' className='flex gap-2 items-center'>  Prices</Link>
   </div>
    
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/wallets' className='flex gap-2 items-center'>Wallets</Link>
   </div>

   
   <div className='border p-3 rounded-xl'>
     <Link href='/dashboard/promotions' className='flex gap-2 items-center'> Promotions</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/activities' className='flex gap-2 items-center' > Activities</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/notifications' className='flex gap-2 items-center'> Notifications</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/settings' className='flex gap-2 items-center'>  Settings</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/utilities' className='flex gap-2 items-center'>  Utilities</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl' >
   <Link href='/dashboard/authentication' className='flex gap-2 items-center'>  Authentication</Link>
   </div>
    </>
  );
};

export default SidebarLink;