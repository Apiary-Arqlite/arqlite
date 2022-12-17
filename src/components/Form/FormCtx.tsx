import React from 'react';
import { FormContextType } from './FormTypes';
import { initialValues } from './FormData';

export const FormContext = React.createContext<FormContextType>({
  form: initialValues,
  handleFormChange: () => {},
});
