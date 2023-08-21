import React from 'react'
import { Sort } from './Sort/Sort'
import { Products } from './Products/Products'

export const Category = () => {
  return (
    <div className="md:grid md:grid-cols-8 md:gap-10 my-10">
        <div className='col-span-2'>
          <Sort></Sort>
        </div>
        <div className='col-span-6'>
          <Products></Products>
        </div>
      </div>
  )
}
