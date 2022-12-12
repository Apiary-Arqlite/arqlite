import React, { useContext } from 'react';
import FormOption from '../Form/FormOption';
import FormSelect from '../Form/FormSelect';
import CalculatorForm from './CalculatorForm';
import { FormContext } from '../Form/FormCtx';

import { initialValues } from '../Form/FormData';

function TotalRevenue() {
  const {
    form: { totalRevenue },
  } = useContext(FormContext);
  return <div>{totalRevenue}</div>;
}

export default function Calculator() {
  return (
    <CalculatorForm initialValues={initialValues}>
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
    </CalculatorForm>
  );
}
