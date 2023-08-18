import React from 'react'
import { TopBanner } from './TopBanner/TopBanner'
import { SpecialOffer } from './SpecialOffer/SpecialOffer'
import { Category } from './Category/Category'

export const Home = () => {
  return (
    <>
      <TopBanner></TopBanner>
      {/* Special Offers and Category section */}
      <div className='md:flex md:gap-20'>
        <div>
          <h1 className='text-3xl text-center my-3'>Special Offers</h1>
          <SpecialOffer></SpecialOffer>
        </div>
        <Category></Category>
      </div>
    </>
  )
}
