import React, { useState } from 'react'
import RangeSlider from '../RangeSlider/RangeSlider'

export const Sort = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, box: 'avaibility', label: 'In Stock', isChecked: false },
    { id: 2, box: 'avaibility', label: 'Out of Stock', isChecked: false },
    { id: 3, box: 'avaibility', label: 'Pre Order', isChecked: false },
    { id: 4, box: 'seasonal', label: 'All Season', isChecked: false },
    { id: 5, box: 'seasonal', label: 'Summer', isChecked: false },
    { id: 6, box: 'seasonal', label: 'Winter', isChecked: false },
  ]);

  const avaibility = checkboxes.filter(checkbox => checkbox.box==='avaibility');
  const seasonal = checkboxes.filter(checkbox => checkbox.box==='seasonal')

  const handleCheckboxChange = (checkboxId) => {
    setCheckboxes(prevCheckboxes =>
      prevCheckboxes.map(checkbox =>
        checkbox.id === checkboxId ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
      )
    );
  };
  return (
    <>
    <div className='border rounded px-2 py-4'>
        <h3 className='text-xl border-b-2'>Price Range</h3>
        <RangeSlider></RangeSlider>
    </div>
    <div className='border rounded px-2 py-4 my-5'>
        <h3 className='text-xl border-b-2'>Avaibility</h3>
        <div>
          {avaibility.map(checkbox => (
            <div key={checkbox.id} className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">{checkbox.label}</span>
                <input
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                  className="checkbox checkbox-success"
                />
              </label>
            </div>
          ))}
        </div>
    </div>
    <div className='border rounded px-2 py-4 my-5'>
        <h3 className='text-xl border-b-2'>Seasonal</h3>
        <div>
          {seasonal.map(checkbox => (
            <div key={checkbox.id} className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">{checkbox.label}</span>
                <input
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                  className="checkbox checkbox-success"
                />
              </label>
            </div>
          ))}
        </div>
    </div>
    </>
    
  )
}
