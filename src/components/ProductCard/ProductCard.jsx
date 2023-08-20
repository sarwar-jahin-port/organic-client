import React from 'react'

export const ProductCard = ({product}) => {
    const {title, img, regular_price, special_price, description} = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="transition-transform duration-500 transform hover:scale-105">
        <img
          className="w-full"
          src={img}
          alt="Gardening Product"
        />
      </div>
      <div className="px-2 py-2">
        <h3 className="font-bold mb-2">{title.length > 30 ? title.slice(0, 30)+'...': title}</h3>
        <div className="flex justify-between mt-4">
          <div>
            <span className="font-semibold text-slate-400 line-through mr-2">${regular_price}</span>
            <span className="font-semibold text-xl text-green-500">${special_price}</span>
          </div>
          <button className="btn btn-sm btn-outline btn-success">Ca</button>
        </div>
      </div>
    </div>

  )
}
