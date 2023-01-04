import React from 'react';
import { FormOptionProps } from '../Form/FormTypes';
import { StyledFormOption } from '../Form/FormOption';

export default function FormOptionTons(props: FormOptionProps) {
  return <StyledFormOption value={props.value}>{props.value}</StyledFormOption>;
}
