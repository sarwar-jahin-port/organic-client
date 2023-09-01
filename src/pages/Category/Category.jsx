import React from 'react'
import { Sort } from './Sort/Sort'
import Products from '../Category/Products/Products.jsx'
import { Helmet } from 'react-helmet-async'

export const Category = () => {
  return (
    <>
      <Helmet>
        <title>Organic Seeds | Category</title>
      </Helmet>
      <div className="md:grid md:grid-cols-8 md:gap-10 my-10">
        <div className='col-span-2'>
          <Sort></Sort>
        </div>
        <div className='col-span-6'>
          <Products></Products>
        </div>
      </div>
    </>
  )
}
