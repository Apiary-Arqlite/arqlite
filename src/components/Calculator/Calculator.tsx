import React, { useContext, useState } from 'react';
import FormOption from '../Form/FormOption';
import CalculatorFormOptionTons from './CalculatorFormOptionTons';
import FormSelect from '../Form/FormSelect';
import CalculatorFormSelectTons from './CalculatorFormSelectTons';
import CalculatorForm from './CalculatorForm';
import { FormContext } from '../Form/FormCtx';
import { initialValues } from '../Form/FormData';
import styled from 'styled-components';

const StyledTotalRevenue = styled.div`
  width: 870px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 32px;
  color: #fff;
  background: #0091a6;
  border-radius: 4px;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const StyledRow1 = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledRow2 = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledRow3 = styled.div``;

function TotalRevenue() {
  const {
    form: { totalRevenue },
  } = useContext(FormContext);
  return (
    <StyledTotalRevenue>
      Total revenue: <StyledSpan> $ {totalRevenue}</StyledSpan>
    </StyledTotalRevenue>
  );
}

export default function Calculator() {
  // initialize states for each dropdown to false
  const [processingOpen, setprocessingOpen] = useState(false);
  const [plasticOpen, setplasticOpen] = useState(false);
  const [gravelOpen, setgravelOpen] = useState(false);
  const [pelletsOpen, setpelletsOpen] = useState(false);
  const [tonsOpen, settonsOpen] = useState(false);

  return (
    <CalculatorForm initialValues={initialValues}>
      <StyledRow1>
        {/* a */}
        <FormSelect
          label='Processing Fee'
          name='processingFee'
          description="Arqlite charges a processing fee for its recycling solution, meaning the company doesn't pay for its raw material but gets paid."
          isOpen={processingOpen}
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
        <FormSelect
          label='Plastic credits'
          name='plasticCredits'
          description='Arqlite technology is certified for RMS Plastic Credits that can be sold to the green bond market.'
          isOpen={plasticOpen}
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
      </StyledRow1>

      <StyledRow2>
        <FormSelect
          label='Gravel revenue bulk'
          name='gravelRevenueBulk'
          description='This is the lowest price for Arqlite Smart Gravel sold bulk, usually to companies in the built environment.'
          isOpen={gravelOpen}
        >
          <FormOption value={200} />
          <FormOption value={300} />
          <FormOption value={400} />
          <FormOption value={500} />
          <FormOption value={600} />
        </FormSelect>

        <FormSelect
          label='Pellets revenue bulk'
          name='pelletsRevenueBulk'
          description='This is the bulk price for Arqlite Composite Plastic pellets sold to blenders and plastic manufacturers.'
          isOpen={pelletsOpen}
        >
          <FormOption value={900} />
          <FormOption value={1000} />
          <FormOption value={1200} />
          <FormOption value={1400} />
          <FormOption value={1600} />
          <FormOption value={1800} />
        </FormSelect>
      </StyledRow2>
      <StyledRow3>
        <CalculatorFormSelectTons
          label='Total tons per month'
          name='totalTonsPerMonth'
          description='Pick the total number of tons associated with each hardware setup: 1tn/h, 2tn/h, 4tn/h, 6tn/h, 8tn/h and 10tn/h.'
          isOpen={tonsOpen}
        >
          <CalculatorFormOptionTons value={462} />
          <CalculatorFormOptionTons value={462} />
          <CalculatorFormOptionTons value={462} />
          <CalculatorFormOptionTons value={924} />
          <CalculatorFormOptionTons value={1848} />
          <CalculatorFormOptionTons value={2772} />
          <CalculatorFormOptionTons value={3696} />
          <CalculatorFormOptionTons value={4620} />
        </CalculatorFormSelectTons>
      </StyledRow3>

      <TotalRevenue />
    </CalculatorForm>
  );
}
