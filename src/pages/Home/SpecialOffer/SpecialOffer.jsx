import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

import special1 from '../../../assets/spcial.jpg'
import special2 from '../../../assets/spacial1.jpg'
import special3 from '../../../assets/special2.jpg'
import special4 from '../../../assets/special3.jpg'
import special5 from '../../../assets/special4.jpg'
import special6 from '../../../assets/special5.jpg'
import special7 from '../../../assets/special6.jpg'

export const SpecialOffer = () => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[300px]"
      >
        <SwiperSlide><img className='max-w-xs' src={special1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='max-w-xs' src={special7} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}
