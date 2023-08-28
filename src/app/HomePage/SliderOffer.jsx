import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './sliderOffer.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

// import img
import img1 from '../../assets/graph10.png'
import img2 from '../../assets/graph9.png'
import img3 from '../../assets/graph8.webp'
import img4 from '../../assets/graph7.png'
import img5 from '../../assets/graph6.png'
import img6 from '../../assets/graph5.jpg'
import img7 from '../../assets/graph4.png'
import img8 from '../../assets/graph3.webp'
import img9 from '../../assets/graph2.jpg'



const SliderOffer = () => {
  return (
    <div className='flex justify-center container mx-auto'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <Image  src={img1} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image  src={img2} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image  src={img3} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image  src={img4} alt="" />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <Image  src={img6} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Image  src={img7} alt="" />
        </SwiperSlide> */}

        <SwiperSlide>
          <Image src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img9} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default SliderOffer;