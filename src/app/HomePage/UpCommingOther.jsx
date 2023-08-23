import wait from '@/utils/wait';
import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/a.jpg'
import img2 from '../../assets/b.png'
// import img3 from '../../assets/c.avif'
import img4 from '../../assets/unnamed-10.png'
import img5 from '../../assets/e.avif'
import img6 from '../../assets/f.png'
import img7 from '../../assets/g.avif'
import img8 from '../../assets/g.jpg'


const UpCommingOther = async () => {
  // await wait()
  return (
    <div className='mt-24 mb-24'>
      <div className='flex justify-center mb-24'><h1 className='text-5xl font-bold'>Comming soon Offer</h1><span className="loading loading-dots loading-lg"></span></div>
      <div className="h-96 carousel carousel-vertical rounded-box grid justify-items-center gap-4">
      <div className="carousel-item h-full">
          <Image width={700} height={300} src={img4} />
        </div>
        
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img2} />
        </div>
        {/* <div className="carousel-item h-full">
          <Image width={700} height={300} src={img3} />
        </div> */}
        
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img5} />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img6} />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img7} />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img8} />
        </div>
        <div className="carousel-item h-full">
          <Image width={700} height={300} src={img1} />
        </div>
        {/* <div className="carousel-item h-full">
          <Image src={img1} />
        </div> */}
        {/* <div className="carousel-item h-full">
          <Image src={img1} />
        </div> */}
        {/* <div className="carousel-item h-full">
          <Image src={img1} />
        </div> */}
      </div>
    </div>
  );
};

export default UpCommingOther;