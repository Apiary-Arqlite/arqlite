/* --------------------------------- imports -------------------------------- */
import React from 'react';
import { useState, useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Calculator from './Calculator';
import Form from './Form';
import FormInput from './FormInput';
import Option from './Option';

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

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log('this item has been clicked');
  };

  function calculate() {
    /*  a*e + b*e + c*e*0.5 + d*e*0.5 */
    /* what are the units here? what do we do with the ratio?*/
    return Intl.NumberFormat('en-US').format(
      A * E + B * E + C * E * 0.5 + D * E * 0.5
    );
  }

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
          <button onClick={console.log(calculate())}>Calculate</button>
        </Form>

        <Calculator />
        <Footer />
      </div>
    </div>
  );
}

export default App;
