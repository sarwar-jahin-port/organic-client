import React from 'react'
import bannerImg from '../../../assets/Vertical_banner.png'

export const SideBanner = () => {
  return (
    <div className='bg-red-200 w-[300px] h-full md:block hidden'>
      <img src={bannerImg} alt="" />
    </div>
  )
}
