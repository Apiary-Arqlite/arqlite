import React from 'react';
import { FormOptionProps } from '../Form/FormTypes';
import { StyledFormOption } from '../Form/FormOption';

export default function FormOption(props: FormOptionProps) {
  return <StyledFormOption value={props.value}>{props.value}</StyledFormOption>;
}
