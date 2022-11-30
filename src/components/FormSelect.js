import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Form';
export default function FormSelect(props) {
  const { label, type = 'text', name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  return (
    <div>
      <label>{label}</label>
      <select
        type={type}
        name={name}
        value={form[name]}
        // should value or default value be assigned {form[name]}?
        defaultValue={form[name]}
        onChange={handleFormChange}
      >
        {props.children}
      </select>
    </div>
  );
}
