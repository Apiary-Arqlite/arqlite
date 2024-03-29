import React from 'react';
import { FormOptionProps } from './FormTypes';

export default function FormOption(props: FormOptionProps) {
  return <option value={props.value}>${props.value}</option>;
}
