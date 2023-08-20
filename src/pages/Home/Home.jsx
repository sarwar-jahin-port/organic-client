import React from 'react'
import { TopBanner } from './TopBanner/TopBanner'
import { SpecialOffer } from './SpecialOffer/SpecialOffer'
import { Category } from './Category/Category'
import { SideBanner } from './SideBanner/SideBanner'
import { ProductShowCase } from './ProductShowCase/ProductShowCase'
import { Marketing } from './Marketing/Marketing'
import { Body } from './Body/Body'

export const Home = () => {
  return (
    <>
      <TopBanner></TopBanner>
      <div className="md:grid md:grid-cols-8 md:gap-10 my-10">
        <div className='col-span-2'>
          <Marketing></Marketing>
        </div>
        <div className='col-span-6'>
          <Body></Body>
        </div>
      </div>
    </>
  )
}
