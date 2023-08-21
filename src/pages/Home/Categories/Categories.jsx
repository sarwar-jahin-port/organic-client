import React from 'react'
import categoryImg1 from '../../../assets/category_icons/veg-seeds.jpg';
import categoryImg2 from '../../../assets/category_icons/flower-seeds.jpg';
import categoryImg3 from '../../../assets/category_icons/gtool.png';
import categoryImg4 from '../../../assets/category_icons/fertilizer.jpg';
import categoryImg5 from '../../../assets/category_icons/pesticides.png';
import categoryImg6 from '../../../assets/category_icons/tub.png';
import categoryImg7 from '../../../assets/category_icons/soil.jpg';
import categoryImg8 from '../../../assets/category_icons/decore.jpg';

export const Categories = () => {
  return (
    <div className='px-5 md:mx-0 py-3 grid grid-cols-3 md:grid-cols-4 gap-5 w-full'>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg1} alt="" />
            <h4 className='text-center mt-1'>Vegetable Seeds</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg2} alt="" />
            <h4 className='text-center mt-1'>Flower Seeds</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg3} alt="" />
            <h4 className='text-center mt-1'>Garden Tools</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg4} alt="" />
            <h4 className='text-center mt-1'>Fertilizer</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg5} alt="" />
            <h4 className='text-center mt-1'>Pesticides</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg6} alt="" />
            <h4 className='text-center mt-1'>Tub</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg7} alt="" />
            <h4 className='text-center mt-1'>Soil & Coir</h4>
        </div>
        <div className="category  flex flex-col items-center">
            <img className='max-w-[120px]' src={categoryImg8} alt="" />
            <h4 className='text-center mt-1'>Organic Decore</h4>
        </div>
    </div>
  )
}
