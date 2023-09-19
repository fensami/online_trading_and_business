import wait from '@/utils/wait';
import Image from 'next/image';
import React from 'react';


const UpCommingOther = async () => {
  // await wait()
  return (
    <div className='mt-24 mb-24'>
      <div className='flex justify-center mb-24'><h1 className=' md:text-5xl text-4xl font-bold'>Comming soon Offer</h1><span className="loading loading-dots loading-lg"></span></div>
      <div className="h-96 carousel carousel-vertical rounded-box grid justify-items-center gap-4">
        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/QjnBhbr/unnamed-10.png" alt='' />
        </div>

        <div className="carousel-item h-full">
          <Image width={700} height={300} src='https://i.ibb.co/fN56VcW/b.png' alt='' />
        </div>
        {/* <div className="carousel-item h-full">
          <Image width={700} height={300} src={img3} />
        </div> */}

        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/XFbRKfq/e.jpg" alt='' />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/rp5v8CF/f.png" alt='' />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/GJ9jnMG/g2.jpg" alt='' />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/VvTKQNL/g.jpg" alt='' />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src="https://i.ibb.co/djNygvp/a.jpg" alt='' />
        </div>

      </div>
    </div>
  );
};

export default UpCommingOther;