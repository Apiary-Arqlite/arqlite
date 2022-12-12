import React, { useState, useContext } from 'react';

import {
  FormOptionProps,
  FormProps,
  FormSelectProps,
  FormType,
  FormContextType,
} from './CalculatorTypes';

const initialValues = {
  processingFee: 60,
  plasticCredits: 60,
  gravelRevenueBulk: 400,
  pelletsRevenueBulk: 600,
  totalTonsPerMonth: 2772,
  totalRevenue: '2522520',
};

const FormContext = React.createContext<FormContextType>({
  form: initialValues,
  handleFormChange: () => {},
});

function FormOption(props: FormOptionProps) {
  return <option value={props.value}>${props.value}</option>;
}

function FormSelect(props: FormSelectProps) {
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

function TotalRevenue() {
  const {
    form: { totalRevenue },
  } = useContext(FormContext);
  return <div>{totalRevenue}</div>;
}

function Form(props: FormProps) {
  const { children, initialValues } = props;
  const [values, setValues] = useState<FormType>(initialValues);

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const newValues = {
      ...values,
      [name]: value,
    };

    const totalRevenue = Intl.NumberFormat('en-US').format(
      Calculate(newValues)
    );

    setValues({
      ...newValues,
      totalRevenue,
    });
  };

  return (
    <FormContext.Provider value={{ form: values, handleFormChange }}>
      <form>{children}</form>
    </FormContext.Provider>
  );
}

function Calculate(values: FormType) {
  const A = values.processingFee as number;
  const B = values.plasticCredits as number;
  const C = values.gravelRevenueBulk as number;
  const D = values.pelletsRevenueBulk as number;
  const E = values.totalTonsPerMonth as number;

  return A * E + B * E + C * E * 0.5 + D * E * 0.5;
}

export default function Calculator() {
  return (
    <Form initialValues={initialValues}>
      {/* a */}
      <FormSelect label='Processing Fee' name='processingFee'>
        <FormOption value={10} />
        <FormOption value={20} />
        <FormOption value={30} />
        <FormOption value={40} />
        <FormOption value={50} />
        <FormOption value={60} />
        <FormOption value={70} />
        <FormOption value={80} />
        <FormOption value={90} />
        <FormOption value={100} />
      </FormSelect>
      {/* b */}
      <FormSelect label='Plastic credits' name='plasticCredits'>
        <FormOption value={10} />
        <FormOption value={20} />
        <FormOption value={30} />
        <FormOption value={40} />
        <FormOption value={50} />
        <FormOption value={60} />
        <FormOption value={70} />
        <FormOption value={80} />
        <FormOption value={90} />
        <FormOption value={100} />
      </FormSelect>
      {/* c */}
      <FormSelect label='Gravel revenue bulk' name='gravelRevenueBulk'>
        <FormOption value={200} />
        <FormOption value={300} />
        <FormOption value={400} />
        <FormOption value={500} />
        <FormOption value={600} />
      </FormSelect>
      {/* d */}
      <FormSelect label='Pellets revenue bulk' name='pelletsRevenueBulk'>
        <FormOption value={900} />
        <FormOption value={1000} />
        <FormOption value={1200} />
        <FormOption value={1400} />
        <FormOption value={1600} />
        <FormOption value={1800} />
      </FormSelect>
      {/* e */}
      <FormSelect label='Total tons per month' name='totalTonsPerMonth'>
        <FormOption value={462} />
        <FormOption value={924} />
        <FormOption value={1848} />
        <FormOption value={2772} />
        <FormOption value={3696} />
        <FormOption value={4620} />
      </FormSelect>
      <TotalRevenue />
    </Form>
  );
}
