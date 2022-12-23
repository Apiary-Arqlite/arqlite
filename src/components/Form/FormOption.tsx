import React from 'react';
import { FormOptionProps } from './FormTypes';
import styled from 'styled-components';

export const StyledFormOption = styled.li`
  color: red;
  list-style: none;
  visibility: hidden;
`;

export default function FormOption(props: FormOptionProps) {
  return (
    <StyledFormOption value={props.value}>$ {props.value}</StyledFormOption>
  );
}
