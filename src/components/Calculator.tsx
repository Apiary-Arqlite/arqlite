import React from 'react';
import { useState, useContext, useEffect } from 'react';

export default function Calculator({ form }) {
  console.table(form);
  const [revenue, setRevenue] = useState('2,522,520');

  useEffect(() => {
    const calculatedRevenue = calculate(form);
    setRevenue(Intl.NumberFormat('en-US').format(calculatedRevenue));
  }, [form]);

  interface FormContextProps {
    form: FormData;
    handleFormChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const FormContext = React.createContext({} as FormContextProps);

  interface FormOptionProps {
    selected?: boolean;
    value: number;
  }

  function FormOption(props: FormOptionProps) {
    return <option>${props.value}</option>;
  }

  interface FormSelectProps {
    label: string;
    name: any;
    children: React.ReactNode;
    [key: string]: any;
  }

  interface FormData {
    [key: string]: any;
  }

  function FormSelect(props: FormSelectProps) {
    const { label, name } = props;

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;
    const currentValue = form?.[name];

    return (
      <div>
        <label>{label}</label>
        <select name={name} value={currentValue} onChange={handleFormChange}>
          {props.children}
        </select>
      </div>
    );
  }

  interface FormProps {
    children: React.ReactNode;

    form: {
      processingFee: number;
      plasticCredits: number;
      gravelRevenueBulk: number;
      pelletsRevenueBulk: number;
      totalTonsPerMonth: number;
    };
  }

  function Form(props: FormProps) {
    const { children, form } = props;
    const [formState, setForm] = useState<{
      processingFee: number;
      plasticCredits: number;
      gravelRevenueBulk: number;
      pelletsRevenueBulk: number;
      totalTonsPerMonth: number;
    }>(form);

    const handleFormChange = (e) => {
      const { name, value } = e.target;

      setForm({
        ...form,
        [name]: value,
      });

      console.log(formState);
    };

    return (
      <form>
        <FormContext.Provider value={{ form: formState, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }

  function calculate(form: {
    processingFee: number;
    plasticCredits: number;
    gravelRevenueBulk: number;
    pelletsRevenueBulk: number;
    totalTonsPerMonth: number;
  }) {
    const A = form.processingFee;
    const B = form.plasticCredits;
    const C = form.gravelRevenueBulk;
    const D = form.pelletsRevenueBulk;
    const E = form.totalTonsPerMonth;
    /*  a*e + b*e + c*e*0.5 + d*e*0.5 */
    /* what are the units here? what do we do with the ratio?*/
    return A * E + B * E + C * E * 0.5 + D * E * 0.5;
  }

  return (
    <Form form={form}>
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
      <button>${revenue}</button>
    </Form>
  );
}
