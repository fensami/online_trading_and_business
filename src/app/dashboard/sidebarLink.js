import Link from 'next/link';
import React from 'react';

const SidebarLink = () => {
  return (
    <div className='flex gap-5 flex-col'>
       
   <div className='border p-3 rounded-xl'><Link href='/dashboard' className=' ' > Dashboard</Link></div>
   
   <div className='border p-3 rounded-xl'><Link className=' ' href='/dashboard/exchange'>  Exchange</Link></div>

   <div className='border p-3 rounded-xl'><Link className=' ' href='/dashboard/forex'>  Forex</Link></div>
   {/* <div className='border p-3 rounded-xl'><Link className=' ' href='/dashboard/marketsOverviews'>  Markets Overview</Link></div> */}
   
    <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/prices' className=''>  Prices</Link>
   </div>
    
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/wallets' className=''>Wallets</Link>
   </div>

   
   <div className='border p-3 rounded-xl'>
     <Link href='/dashboard/promotions' className=''> Promotions</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/activities' className='' > Activities</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/notifications' className=''> Notifications</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/settings' className=''>  Settings</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl'>
   <Link href='/dashboard/utilities' className=''>  Utilities</Link>
   </div>
   
   
   <div className='border p-3 rounded-xl' >
   <Link href='/dashboard/authentication' className=''>  Authentication</Link>
   </div>
    </div>
  );
};

export default SidebarLink;