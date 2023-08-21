import React, { useState } from 'react';
import { Range } from 'react-range';

function RangeSlider() {
  const [values, setValues] = useState([50]);
  console.log(values);
  return (
    <Range
      step={1}
      min={0}
      max={999}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '6px',
            width: '100%',
            backgroundColor: '#289600'
          }}
          className='mt-10 mb-6'
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '42px',
            width: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid black',
            textAlign: "center",
            position: 'relative'
          }}>
            <span className='absolute right-1/4 top-1/4'>{values}</span>
          </div>
      )}
    />
  );
}

export default RangeSlider;
