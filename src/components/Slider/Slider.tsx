import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
  height: 8px;
  width: 100%;
  border: 2px solid red;
`;
export const Slider = () => {
  return (
    <StyledSlider
      className='horizontal-slider'
      thumbClassName='example-thumb'
      trackClassName='example-track'
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};
