import React = require('react');

export interface FormOptionProps {
  selected?: boolean;
  value: number;
}

export interface FormProps {
  children: React.ReactNode;
  initialValues: { [key: string]: any };
}

export interface FormSelectProps {
  label: string;
  name: string;
  children: React.ReactNode;
}

export interface FormType {
  [key: string]: number | string;
}

export interface FormContextType {
  form: FormType;
  handleFormChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
