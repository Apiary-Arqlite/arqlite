import React = require('react');

export interface FormOptionProps {
  value: number;
}

export interface FormProps {
  children: React.ReactNode;
  initialValues: { [key: string]: any };
}

export interface FormSelectProps {
  name: any;
  label: string;
  description: string;
  children: React.ReactNode;
}

export interface FormType {
  [key: string]: number | string;
}

export interface FormContextType {
  form: FormType;
  handleFormChange: (arg: any) => void;
}
