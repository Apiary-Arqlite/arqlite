import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';
import styled from 'styled-components';

export const StyledFormSelect = styled.div`
  width: 425px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid #54585b;
  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: #54585b;
  margin-top: 16px;
  margin-left: 20px;
`;

export const StyledSelect = styled.select`
  position: relative;
  appearance: none;
  height: 40px;
  margin: 12px 20px 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  outline: none;
  line-height: 19px;
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
      <StyledLabel>{label}</StyledLabel>
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
