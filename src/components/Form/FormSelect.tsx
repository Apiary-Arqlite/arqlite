import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';
import styled from 'styled-components';
import info from '../../images/info.svg';

export const StyledFormSelect = styled.div`
  width: 425px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid #54585b;
  border-radius: 4px;
`;

export const StyledFormSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  line-height: 20px;
  color: #54585b;
  margin-top: 16px;
  margin-left: 20px;
`;

export const StyledInfoButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: transparent;

  margin-top: 16px;
  margin-left: 8px;
  height: 20px;
  width: 16px;
  padding: 0;
  line-height: 16px;
`;

//   background-image: url(${info});
//  background-repeat: no-repeat;
//  image-fit: contain;

export const StyledSelectDiv = styled.div`
  position: relative;
  appearance: none;
  height: 22px;
  margin: 12px 20px 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  outline: none;
  line-height: 22px;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  color: #54585b;

  border: 2px solid red;
  width: 385px;

  &:hover {
    opacity: 0.8;
  }

  &:first-child {
    padding-top: 8px;
  }
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <StyledFormSelect>
      <StyledFormSelectDiv>
        <StyledLabel>{label}</StyledLabel>
        <StyledInfoButton>&#9432;</StyledInfoButton>
      </StyledFormSelectDiv>

      <StyledSelectDiv<any>
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        <ul>{props.children}</ul>
      </StyledSelectDiv>
    </StyledFormSelect>
  );
}

// code for info icon &#9432;,

// Q: How can I pass a prop to a styled component?
// A: https://stackoverflow.com/questions/53951855/how-to-pass-a-prop-to-a-styled-component
