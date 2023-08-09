import wait from '@/utils/wait';
import React from 'react';

const UpCommingOther =async () => {
  await wait()
  return (
    <div className='mt-10'>
      <h1>Comming soon...</h1>
    </div>
  );
};

export default UpCommingOther;