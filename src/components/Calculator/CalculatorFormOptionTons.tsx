import React from 'react';
import { FormOptionProps } from '../Form/FormTypes';

export default function FormOptionTons(props: FormOptionProps) {
  return <option value={props.value}>{props.value}</option>;
}
