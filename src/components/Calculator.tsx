import React, { useEffect, useState, useContext } from 'react';

import {
  FormOptionProps,
  FormProps,
  FormSelectProps,
  FormType,
  FormContextType,
} from './CalculatorTypes';

export default function Calculator(props: FormProps) {
  const { initialValues } = props;
  const [revenue, setRevenue] = useState('2,522,520');

  const FormContext = React.createContext<FormContextType>({
    form: initialValues,
    handleFormChange: () => {},
  });

  function FormOption(props: FormOptionProps) {
    return <option selected={props.selected}>${props.value}</option>;
  }

  function FormSelect(props: FormSelectProps) {
    const { label, name } = props;

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    const currentValue = form[name];

    return (
      <div>
        <label>{label}</label>
        <select name={name} value={currentValue} onChange={handleFormChange}>
          {props.children}
        </select>
      </div>
    );
  }

  function Form(props: FormProps) {
    const { children, initialValues } = props;
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
      setValues(initialValues);
    }, [initialValues]);

    const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;

      setValues({
        ...values,
        [name]: value,
      });

      const calculatedValue = calculate(values);

      setRevenue(Intl.NumberFormat('en-US').format(calculatedValue));
    };

    return (
      <form>
        <FormContext.Provider value={{ form: values, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }

  function calculate(values: FormType) {
    const A = values.processingFee;
    const B = values.plasticCredits;
    const C = values.gravelRevenueBulk;
    const D = values.pelletsRevenueBulk;
    const E = values.totalTonsPerMonth;

    return A * E + B * E + C * E * 0.5 + D * E * 0.5;
  }

  return (
    <Form initialValues={initialValues}>
      {/* a */}
      <FormSelect
        label='Processing Fee'
        name='processingFee'
        value={initialValues.processingFee}
      >
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
      <button>${revenue}</button>
    </Form>
  );
}
