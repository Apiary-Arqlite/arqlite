import React, { useEffect } from 'react';

import { useState, useContext } from 'react';

export default function Calculator() {
  const [revenue, setRevenue] = useState('2,522,520');

  let initialValues = {
    processingFee: 60,
    plasticCredits: 50,
    gravelRevenueBulk: 400,
    pelletsRevenueBulk: 1200,
    totalTonsPerMonth: 2772,
  };

  const FormContext = React.createContext({
    form: {},
    handleFormChange: () => {},
  });

  interface FormOptionProps {
    selected?: boolean;
    value: number;
  }

  function FormOption(props: FormOptionProps) {
    return <option selected={props.selected}>${props.value}</option>;
  }

  interface FormSelectProps {
    label: string;
    name: string;
    value?: any;
    children: React.ReactNode;
  }

  function FormSelect(props: FormSelectProps) {
    const { label, name } = props;

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    form: Form = formContext.form;
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={currentValue} onChange={handleFormChange}>
          {props.children}
        </select>
      </div>
    );
  }

  interface Form {
    [key: string]: any;
  }

  interface FormProps {
    children: React.ReactNode;
    submit?: () => void;
    initialValues: { [key: string]: any };
  }

  function Form(props: FormProps) {
    const { children, submit = () => {}, initialValues } = props;
    const [form, setForm] = useState(initialValues);
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
      setValues(form);
    }, [form]);

    const handleFormChange = (e) => {
      const { name, value } = e.target;

      setForm({
        ...form,
        [name]: value,
      });

      // console.log(formState)
    };

    return (
      <form>
        <FormContext.Provider value={{ form, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }

  function calculate() {
    // calculations needs to be based on 'values' instead of 'initialValues'
    const A = initialValues.processingFee;
    const B = initialValues.plasticCredits;
    const C = initialValues.gravelRevenueBulk;
    const D = initialValues.pelletsRevenueBulk;
    const E = initialValues.totalTonsPerMonth;
    /*  a*e + b*e + c*e*0.5 + d*e*0.5 */
    /* what are the units here? what do we do with the ratio?*/
    setRevenue(
      Intl.NumberFormat('en-US').format(
        A * E + B * E + C * E * 0.5 + D * E * 0.5
      )
    );
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
}