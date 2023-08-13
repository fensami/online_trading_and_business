import wait from '@/utils/wait';
import React from 'react';

const UpCommingOther =async () => {
  await wait()
  return (
    <div className='mt-10'>
      <div className='flex items-center'><h1 className='text-xl font-bold'>Comming soon</h1><span className="loading loading-dots loading-lg"></span></div>
    </div>
  );
};

export default UpCommingOther;