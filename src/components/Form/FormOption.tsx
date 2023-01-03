import React from 'react';
import { FormOptionProps } from './FormTypes';
import styled from 'styled-components';

export const StyledFormOption = styled.li`
  margin: 0 auto;
  padding-left: 20px;

  height: 46px;

  list-style: none;
  background-color: #fff;
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: #54585b;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

export default function FormOption(props: FormOptionProps) {
  return (
    <StyledFormOption
      value={props.value}
      onClick={() => {
        console.log(props.value);
        // set isOpen to !isOpen
      }}
    >
      $ {props.value}
    </StyledFormOption>
  );
}
