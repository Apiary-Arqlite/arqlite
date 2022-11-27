/* --------------------------------- imports -------------------------------- */
import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import Form from './Form';
import FormInput from './FormInput';

/* -------------------------------------------------------------------------- */
/*                                function App                                */
/* -------------------------------------------------------------------------- */

function App() {
  const [message, setMessage] = useState('');

  const initialValues = {
    processingFee: '60',
    plasticCredits: '50',
    gravelRevenueBulk: '400',
    pelletsRevenueBulk: '1200',
    totalTonsPerMonth: '2772',
  };

  const A = initialValues.processingFee;
  const B = initialValues.plasticCredits;
  const C = initialValues.gravelRevenueBulk;
  const D = initialValues.pelletsRevenueBulk;
  const E = initialValues.totalTonsPerMonth;

  function calculate() {
    /*  a*e + b*e + c*e*0.5 + d*e*0.5 */
    /* what are the units here? */
    return Intl.NumberFormat('en-US').format(
      A * E + B * E + C * E * 0.5 + D * E * 0.5
    );
  }

  console.log(calculate());

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        {/* wrap in context.provider to manage values */}
        <Form initialValues={initialValues}>
          {/* a */}
          <FormInput label='Processing Fee' name='processingFee' />
          {/* b */}
          <FormInput label='Plastic credits' name='plasticCredits' />
          {/* c */}
          <FormInput label='Gravel revenue bulk' name='gravelRevenueBulk' />
          {/* d */}
          <FormInput label='Pellets revenue bulk' name='pelletsRevenueBulk' />
          {/* e */}
          <FormInput label='Total tons per month' name='totalTonsPerMonth' />
        </Form>

        <Footer />
      </div>
    </div>
  );
}

export default App;
