import React from 'react';
import { useState } from 'react';

export const FormContext = React.createContext({
  form: {},
});

export default function Form(props) {
  const { children, submit = () => {}, initialValues } = props;
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(value);
    console.table(initialValues);
  };

  return (
    <form>
      <FormContext.Provider value={{ form, handleFormChange }}>
        {children}
      </FormContext.Provider>
      {/* submit button doesn't do anything */}
      <button type='button' onClick={() => submit(form)}>
        Submit
      </button>
    </form>
  );
}
