import React from 'react'
import { SpecialOffer } from '../SpecialOffer/SpecialOffer'
import { SideBanner } from '../SideBanner/SideBanner'

export const Marketing = () => {
  return (
    <div>
        <div>
          <h1 className='text-3xl text-center my-3'>Special Offers</h1>
          <SpecialOffer></SpecialOffer>
        </div>
        <div className='my-3'>
            <SideBanner></SideBanner>
        </div>
    </div>
  )
}
