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
        className="mySwiper w-[210px]"
      >
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special1} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special2} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special3} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special4} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special5} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special6} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-white p-2 border-2 border-green-400'>
              <img className='max-w-[190px]' src={special7} alt="" />
              <p className='mt-2 ml-2'>Lorem, ipsum dolor sit</p>
              <p className='mt-2 ml-2'>price</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
