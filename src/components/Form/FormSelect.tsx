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
        <Tooltip title={description}>
          <StyledInfoButton>&#9432;</StyledInfoButton>
        </Tooltip>
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

// code for info icon &#9432;,
// q: how to ignore a typsecript error for a line of code in a react component?
// a:
