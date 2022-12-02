import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

import Form from './Form';
import FormSelect from './FormSelect';
import FormOption from './FormOption';

export default function Calculator() {
  const [revenue, setRevenue] = useState('2,522,520');
  const initialValues = {
    processingFee: 60,
    plasticCredits: 50,
    gravelRevenueBulk: 400,
    pelletsRevenueBulk: 1200,
    totalTonsPerMonth: 2772,
  };

  const submit = (form) => {
    console.log(calculate());
  };

  function calculate() {
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
    <Form submit={submit} initialValues={initialValues}>
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
        <FormOption defaultValue value={50} />
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
        <FormOption selected value={400} />
        <FormOption value={500} />
        <FormOption value={600} />
      </FormSelect>
      {/* d */}
      <FormSelect label='Pellets revenue bulk' name='pelletsRevenueBulk'>
        <FormOption value={900} />
        <FormOption value={1000} />
        <FormOption value={1200} />
        <FormOption selected value={1400} />
        <FormOption value={1600} />
        <FormOption value={1800} />
      </FormSelect>
      {/* e */}
      <FormSelect label='Total tons per month' name='totalTonsPerMonth'>
        <FormOption value={462} />
        <FormOption value={924} />
        <FormOption value={1848} />
        <FormOption selected value={2772} />
        <FormOption value={3696} />
        <FormOption value={4620} />
      </FormSelect>
      <button onClick={() => setRevenue(calculate())}>${revenue}</button>
    </Form>
  );
}

{
  /* wrap in context.provider to manage values */
}
