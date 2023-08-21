import React, { useEffect, useState } from 'react'
import { TopProduct } from './TopProduct';

export const TopRated = () => {
    const[topProducts, setTopProducts] = useState([]);

    useEffect(()=>{
        fetch("product_showcase.json")
        .then(res => res.json())
        .then(data => setTopProducts(data))
    }, [])
  return (
    <div className='hidden md:block'>
        <h3 className='text-2xl font-bold'>Top Rated</h3>
        { topProducts && 
            topProducts.map(product => <TopProduct 
                key={product.id}
                product = {product}
            ></TopProduct>)
        }
    </div>
  )
}
