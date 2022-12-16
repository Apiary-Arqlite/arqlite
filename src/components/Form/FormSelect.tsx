import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';
import styled from 'styled-components';

const StyledFormSelect = styled.div`
  width: 425px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid #54585b;
  border-radius: 4px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: #54585b;
  margin-top: 16px;
  margin-left: 20px;
`;

const StyledSelect = styled.select`
  height: 40px;
  margin: 12px auto 0 20px;
  padding: 0;
  border: none;
  border-radius: 4px;

  line-height: 19px;
  color: #54585b;
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
