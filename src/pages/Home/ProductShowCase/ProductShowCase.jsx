import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../../components/ProductCard/ProductCard';

export const ProductShowCase = ({title}) => {
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("product_showcase.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  
return (
    <div>
    <h2 className='px-5 text-3xl'>{title}</h2>
    <div className='px-5 md:mx-0 py-3 grid grid-cols-2 md:grid-cols-4 gap-5 w-full'>
        { products && 
            products.map(product => <ProductCard 
                key={product.id}
                product = {product}
            ></ProductCard>)
        }
    </div>
    </div>
  )
}
