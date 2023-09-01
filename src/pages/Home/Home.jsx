import React from 'react'
import { TopBanner } from './TopBanner/TopBanner'
import { SpecialOffer } from './SpecialOffer/SpecialOffer'
import { Categories } from './Categories/Categories'
import { SideBanner } from './SideBanner/SideBanner'
import { ProductShowCase } from './ProductShowCase/ProductShowCase'
import { Marketing } from './Marketing/Marketing'
import { Body } from './Body/Body'
import { Helmet } from 'react-helmet-async'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Organic Seeds | Home</title>
      </Helmet>
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
