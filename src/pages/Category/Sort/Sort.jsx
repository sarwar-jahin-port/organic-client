import React from 'react'
import RangeSlider from '../RangeSlider/RangeSlider'

export const Sort = () => {
  return (
    <>
    <div className='border rounded px-2 py-4'>
        <h3 className='text-xl border-b-2'>Price Range</h3>
        <RangeSlider></RangeSlider>
    </div>
    <div className='border rounded px-2 py-4 my-5'>
        <h3 className='text-xl border-b-2'>Avaibility</h3>
        
    </div>
    </>
    
  )
}
