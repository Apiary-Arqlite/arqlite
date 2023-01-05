import React, { useState } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  margin: 0 0 54px;
  @media (max-width: 641px) {
    margin: 0 0 60px;
  }
`;
const StyledValue = styled.p`
  margin: 0 auto;
  text-align: center;
  line-height: 44px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledTons = styled(StyledValue)`
  margin: 64px auto 0;
`;

const StyledTitle = styled.p`
  margin: 12px auto 0;
  text-align: center;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.muted};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.light};
`;

const StyledTitleLeft = styled(StyledTitle)`
  text-align: left;
  margin: 48px auto 0 0;
  @media (max-width: 640px) {
    margin: 73px auto 0;
  }
`;

export const Slider = () => {
  const [currentValue, setCurrentValue] = useState(5);
  return (
    <StyledContainer>
      <StyledValue>
        {currentValue === 1 ? 500 : currentValue * 375} ft<sup>2</sup>
      </StyledValue>
      <StyledTitle>Hardware Footprint</StyledTitle>{" "}
      <StyledTitleLeft>Recycling Capacity</StyledTitleLeft>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        markClassName="slider-mark"
        marks={[1, 2, 4, 6, 8, 10]}
        min={1}
        max={10}
        defaultValue={currentValue}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onAfterChange={(value) => setCurrentValue(value)}
      />
      <StyledTons>{currentValue}</StyledTons>
      <StyledTitle>Tons of plastic per hour</StyledTitle>
    </StyledContainer>
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
