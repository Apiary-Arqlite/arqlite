import React from 'react';

import styled from 'styled-components';

const values = [1, 2, 4, 6, 8, 10];

const SliderInput = styled.input`
  display: none;
`;

const SliderLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background: #ccc;
  color: #333;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #ddd;
    color: #000;
  }

  ${SliderInput}:checked + & {
    background: #555;
    color: #fff;
  }

  ${SliderInput}:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 3px #555;
    vertical-align: middle;
  }
`;

export default function RangeSlider() {
  function handleChange(event) {
    const value = event.target.value;
    // Update component state with the selected value
  }

  return (
    <div>
      {values.map((value) => (
        <React.Fragment key={value}>
          <SliderInput
            type='radio'
            id={`slider${value}`}
            name='slider'
            value={value}
            onChange={handleChange}
          />
          <SliderLabel htmlFor={`slider${value}`}>{value}</SliderLabel>
        </React.Fragment>
      ))}
    </div>
  );
}
