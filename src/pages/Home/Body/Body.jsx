import React, { useState } from 'react'
import { Categories } from '../Categories/Categories'
import { ProductShowCase } from '../ProductShowCase/ProductShowCase'
import { Banner } from '../../../components/Banner/Banner'

export const Body = () => {
  const[more, setMore] = useState(false);
  return (
    <div>
        <Categories></Categories>
        <ProductShowCase title="Vegetable Seeds"></ProductShowCase>
        <Banner></Banner>
        <ProductShowCase title="Flower Seeds"></ProductShowCase>
        <ProductShowCase title="Gardening Tools"></ProductShowCase>
        <Banner></Banner>
        {more ? (
          <>
            <ProductShowCase title="Fertilizer"></ProductShowCase>
            <ProductShowCase title="Tub"></ProductShowCase>
            <ProductShowCase title="Insecticides & Others"></ProductShowCase>
          </>
        ) : (
          <div className='text-center my-4'><button onClick={()=>setMore(true)} className="btn btn-outline btn-success">More</button></div>
        )}
    </div>
  )
}
