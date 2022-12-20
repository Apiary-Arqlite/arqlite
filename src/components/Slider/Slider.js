import React, { useState } from 'react';
import ReactSlider from 'react-slider';

export const Slider = () => {
  const [currentValue, setCurrentValue] = useState(1);
  return (
    <ReactSlider
      className='slider'
      thumbClassName='slider-thumb'
      trackClassName='slider-track'
      markClassName='slider-mark'
      marks={[1, 2, 4, 6, 8, 10]}
      min={1}
      max={10}
      defaultValue={6}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      onAfterChange={(value) => setCurrentValue(value)}
    />
  );
};

/* values for the slider 

1 tn/hour = 500sq Ft

2 tn/hr = 750sq ft

4 tn/hr = 1,500 sq ft

6 tn/hr = 2,250 sq ft

8 th/hr = 3,000 sq ft

10 tn/hr = 3,750 sq ft

*/
