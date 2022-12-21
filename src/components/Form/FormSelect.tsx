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

export const StyledSelect = styled.select`
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

  option {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: red;
    background-color: blue;
  }

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

      <StyledSelect
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        {props.children}
      </StyledSelect>
    </StyledFormSelect>
  );
}

// code for info icon &#9432;,
