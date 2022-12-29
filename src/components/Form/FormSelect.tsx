import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';
import styled from 'styled-components';
import { Tooltip } from '@mui/material';

import info from '../../images/info.svg';

export const StyledFormSelect = styled.div`
  width: 425px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid #54585b;
  border-radius: 4px;

  @media (max-width: 1000px) {
    width: 343px;
    height: 90px;
  }
`;

export const StyledFormSelectDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  line-height: 20px;
  color: #8f999a;
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
  color: #54585b;
`;

export const StyledSelectDiv = styled.div`
  position: relative;
  appearance: none;
  height: 22px;
  width: 385px;
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

  &:first-child {
    padding-top: 8px;
  }

  @media (max-width: 1000px) {
    width: 303px;
    height: 22px;
    margin: 12px 20px 0;
  }
`;

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: rgba(0, 0, 0, 0.8);

    font-family: 'Archivo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const DropdownItems = styled.ul`
  margin: 50px 0 0;
  padding: 12px 0;
  width: 425px;
  display: ${({ isOpen }: any) => (isOpen ? 'block' : 'none')};
  display: none;
  background-color: #fff;
  border: 1px solid #54585b;
  border-radius: 4px;
  position: relative;
  left: -24px;

  @media (max-width: 1000px) {
    width: 343px;
  }
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name, description, isOpen } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <StyledFormSelect>
      <StyledFormSelectDiv>
        <StyledLabel>{label}</StyledLabel>
        <StyledTooltip title={description} placement='bottom-end'>
          <StyledInfoButton>&#9432;</StyledInfoButton>
        </StyledTooltip>
      </StyledFormSelectDiv>

      <StyledSelectDiv<any>
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
        isOpen={isOpen}
      >
        {/* @ts-ignore */}
        <DropdownItems isOpen={isOpen}>{props.children}</DropdownItems>
      </StyledSelectDiv>
    </StyledFormSelect>
  );
}
