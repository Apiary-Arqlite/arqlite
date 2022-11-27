import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Form';
export default function FormInput(props) {
  const { label, type = 'text', name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
      />
    </div>
  );
}
