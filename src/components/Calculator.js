import React from 'react';
import { useState } from 'react';

import Dropdown from './Dropdown';
import Option from './Option';

export default function Calculator() {
  const [optionValue, setOptionValue] = useState('');
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  return (
    <div>
      <section>
        <div>
          <p>Calculate your hardware footprint for a post-consumer setup</p>
          <p>
            NUMBER sqft {/* footprint results will be calculated by equation */}
          </p>
          <p>Hardware footprint</p>
          <p>Recycling capacity</p>
          {/* number slider goes here 
      /* number slider controls recycling capacity */}
          <p>Tonnes of plastic per hour</p>
          {/* this is the start of the form section */}
          <p>Calculate the impact of a multiple revenue stream process</p>
          <div>
            <Dropdown
              formLabel='Processing fee'
              buttonText='send form'
              onChange={handleSelect}
              action='/'
            >
              <Option defaultValue value='60' />
              <Option value='10' />
              <Option value='20' />
              <Option value='30' />
              <Option value='40' />
              <Option value='50' />
              <Option value='60' />
              <Option value='70' />
              <Option value='80' />
              <Option value='90' />
              <Option value='100' />
            </Dropdown>
            <p>you defaultValue {optionValue}</p>
          </div>
          <div>
            <Dropdown
              formLabel='Plastic credits'
              buttonText='send form'
              action='/'
            >
              <Option defaultValue value='50' />
              <Option value='10' />
              <Option value='20' />
              <Option value='30' />
              <Option value='40' />
              <Option value='50' />
              <Option value='60' />
              <Option value='70' />
              <Option value='80' />
              <Option value='90' />
              <Option value='100' />
            </Dropdown>
          </div>
          <div>
            <Dropdown
              formLabel='Gravel revenue bulk'
              buttonText='send form'
              action='/'
            >
              <Option defaultValue value='400' />
              <Option value='200' />
              <Option value='300' />
              <Option value='400' />
              <Option value='500' />
              <Option value='600' />
            </Dropdown>
          </div>
          <div>
            <Dropdown
              formLabel='Pellets revenue bulk'
              buttonText='send form'
              action='/'
            >
              <Option defaultValue value='1200' />
              <Option value='900' />
              <Option value='1000' />
              <Option value='1200' />
              <Option value='1400' />
              <Option value='1600' />
              <Option value='1800' />
            </Dropdown>
          </div>

          <div>
            <Dropdown
              formLabel='Total tons per month'
              buttonText='send form'
              action='/'
            >
              <Option defaultValue value='2772' />
              <Option value='462' />
              <Option value='924' />
              <Option value='1848' />
              <Option value='2772' />
              <Option value='3696' />
              <Option value='4620' />
            </Dropdown>
          </div>
          <div>
            {/* result will be calculate based on input */}
            <p>Total revenue: $1000</p>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* created dropdowns for calculator. left off setting up useState */
}
