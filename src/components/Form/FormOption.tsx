import React from 'react';
import { FormOptionProps } from './FormTypes';
import styled from 'styled-components';

const StyledFormOption = styled.option`
  appearance: none;
`;

export default function FormOption(props: FormOptionProps) {
  return (
    <StyledFormOption value={props.value}>$ {props.value}</StyledFormOption>
  );
}
