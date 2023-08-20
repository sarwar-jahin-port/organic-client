import React from 'react'
import { Category } from '../Category/Category'
import { ProductShowCase } from '../ProductShowCase/ProductShowCase'
import { Banner } from '../../../components/Banner/Banner'

export const Body = () => {
  return (
    <div className=''>
        <Category></Category>
        <ProductShowCase title="Gardening Tools"></ProductShowCase>
        <Banner></Banner>
    </div>
  )
}
