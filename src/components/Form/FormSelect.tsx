import React, { useContext } from 'react';
import { FormSelectProps } from './FormTypes';
import { FormContext } from './FormCtx';

export default function FormSelect(props: FormSelectProps) {
  const { label, name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <div>
      <label>{label}</label>
      <select
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        {props.children}
      </select>
    </div>
  );
}
