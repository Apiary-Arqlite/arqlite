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
  const [processingDD, setProcessingDD] = useState(false);
  const [plasticDD, setPlasticDD] = useState(false);
  const [gravelDD, setGravelDD] = useState(false);
  const [pelletsDD, setPelletsDD] = useState(false);
  const [tonsDD, setTonsDD] = useState(false);

  return (
    <CalculatorForm initialValues={initialValues}>
      <StyledRow1>
        {/* a */}
        <FormSelect
          label='Processing Fee'
          name='processingFee'
          isOpen={processingDD}
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
          isOpen={plasticDD}
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
      {/* }
      <StyledRow2>

        <FormSelect
          label='Gravel revenue bulk'
          name='gravelRevenueBulk'
          isOpen={gravelDD}
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
          isOpen={pelletsDD}
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
          isOpen={tonsDD}
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
      </StyledRow3> */}

      <TotalRevenue />
    </CalculatorForm>
  );
}
