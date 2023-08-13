import React from 'react'
import { TopBanner } from './TopBanner/TopBanner'
import { SpecialOffer } from './SpecialOffer/SpecialOffer'

export const Home = () => {
  return (
    <>
      <TopBanner></TopBanner>
      {/* Special Offers and Category section */}
      <div className='md:flex'>
        <div>
          <h1 className='text-3xl text-center'>Special Offers</h1>
          <SpecialOffer></SpecialOffer>
        </div>

      </div>
    </>
  )
}
