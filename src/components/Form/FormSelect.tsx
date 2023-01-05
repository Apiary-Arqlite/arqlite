import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';
import styled from 'styled-components';
import { Tooltip } from '@mui/material';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 425px;
  height: 90px;
  display: flex;
  flex-direction: column;

  border: 1px solid #54585b;
  border-radius: 4px;

  @media (max-width: 1000px) {
    max-width: 343px;
    height: 90px;
  }
`;

export const LabelWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 1000px) {
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 20px;
  color: #8f999a;
  margin: 16px 0 0 20px;
`;

export const Info = styled.p`
  cursor: pointer;

  margin-top: 16px;
  margin-left: 8px;
  height: 20px;
  width: 16px;
  padding: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #54585b;
`;

export const Select = styled.select`
  height: 22px;
  margin: 0 20px 0;
  padding: 0;
  border: none;
  outline: none;
  line-height: 22px;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  color: #54585b;

  @media (max-width: 1000px) {
  }
`;

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name, description } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <StyledTooltip title={description}>
          <Info>&#9432;</Info>
        </StyledTooltip>
      </LabelWrapper>
      <Select<any>
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        {props.children}
      </Select>
    </Wrapper>
  );
}

// q: how to comment out several lines of code at once?
