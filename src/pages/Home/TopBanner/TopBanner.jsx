import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import topBannerImg1 from '../../../assets/topbanner.jpg';
import topBannerImg2 from '../../../assets/topbanner1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const TopBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full max-h-min' src={topBannerImg1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src={topBannerImg2} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}