import React, { useState } from 'react';
import { FormProps, FormType } from '../Form/FormTypes';
import { FormContext } from '../Form/FormCtx';

function Calculate(values: FormType) {
  const A = values.processingFee as number;
  const B = values.plasticCredits as number;
  const C = values.gravelRevenueBulk as number;
  const D = values.pelletsRevenueBulk as number;
  const E = values.totalTonsPerMonth as number;

  return A * E + B * E + C * E * 0.5 + D * E * 0.5;
}

export default function CalculatorForm(props: FormProps) {
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
