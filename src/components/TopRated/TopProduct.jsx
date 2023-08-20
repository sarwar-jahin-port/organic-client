import React from 'react'

export const TopProduct = ({product}) => {
    const {img, title, regular_price, special_price} = product;
  return (
    <div className="max-w-sm rounded overflow-hidden flex items-center justify-between px-2 cursor-pointer">
      <div className="transition-transform duration-500 transform hover:scale-105">
        <img
          className="max-w-[70px]"
          src={img}
          alt="Gardening Product"
        />
      </div>
      <div className="pl-2 py-2">
        <h3 className="font-bold">{title.length > 30 ? title.slice(0, 30)+'...': title}</h3>
        <div className="flex justify-between">
          <div>
            <span className="font-semibold text-slate-400 line-through mr-2">${regular_price}</span>
            <span className="font-semibold text-xl text-green-500">${special_price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
