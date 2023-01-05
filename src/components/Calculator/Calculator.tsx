import React, { useContext } from 'react';
import FormOption from '../Form/FormOption';
import FormOptionTons from './CalculatorFormOptionTons';
import FormSelect, { StyledTooltip, Info } from '../Form/FormSelect';
import CalculatorFormSelectTons from './CalculatorFormSelectTons';
import CalculatorForm from './CalculatorForm';
import { FormContext } from '../Form/FormCtx';
import { initialValues } from '../Form/FormData';
import styled from 'styled-components';

const RevenueWrapper = styled.div`
  width: 870px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #0091a6;
  border-radius: 4px;

  @media (max-width: 1000px) {
    width: 343px;
    height: 90px;
    font-size: 24px;
  }
`;

const InfoWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 378px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    width: 218px;
  }
`;
const RevenueInfo = styled(Info)`
  margin: 12px 0 0;
  text-align: center;
  color: #fff;
`;
const TotalRevenue = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  top: -12px;
  font-size: 28px;
  line-height: 32px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledSpan = styled.span`
  font-weight: 700;
  text-align: center;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

function TotalRevenueBox() {
  const {
    form: { totalRevenue },
  } = useContext(FormContext);
  return (
    <RevenueWrapper>
      <InfoWrapper>
        <StyledTooltip title='The total revenue is the addition of each revenue stream multiplied by the total recycling capacity installed, considering 50% Smart Gravel and 50% Repro Pellets sales.'>
          <RevenueInfo>&#9432;</RevenueInfo>
        </StyledTooltip>
      </InfoWrapper>

      <TotalRevenue>
        Total revenue: <StyledSpan> ${totalRevenue}</StyledSpan>
      </TotalRevenue>
    </RevenueWrapper>
  );
}

export default function Calculator() {
  return (
    <CalculatorForm initialValues={initialValues}>
      <CalculatorFormSelectTons
        label='Total tons per month'
        name='totalTonsPerMonth'
        description='Pick the total number of tons associated with each hardware setup: 1tn/h, 2tn/h, 4tn/h, 6tn/h, 8tn/h and 10tn/h.'
      >
        <FormOptionTons value={462} />
        <FormOptionTons value={462} />
        <FormOptionTons value={462} />
        <FormOptionTons value={924} />
        <FormOptionTons value={1848} />
        <FormOptionTons value={2772} />
        <FormOptionTons value={3696} />
        <FormOptionTons value={4620} />
      </CalculatorFormSelectTons>

      <StyledRow>
        <FormSelect
          label='Processing fee'
          name='processingFee'
          description="Arqlite charges a processing fee for its recycling solution, meaning the company doesn't pay for its raw material but gets paid."
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
        <FormSelect
          label='Plastic credits'
          name='plasticCredits'
          description='Arqlite technology is certified for RMS Plastic Credits that can be sold to the green bond market.'
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
      </StyledRow>

      <StyledRow>
        <FormSelect
          label='Gravel revenue bulk'
          name='gravelRevenueBulk'
          description='This is the lowest price for Arqlite Smart Gravel sold bulk, usually to companies in the built environment.'
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
        >
          <FormOption value={900} />
          <FormOption value={1000} />
          <FormOption value={1200} />
          <FormOption value={1400} />
          <FormOption value={1600} />
          <FormOption value={1800} />
        </FormSelect>
      </StyledRow>

      <TotalRevenueBox />
    </CalculatorForm>
  );
}
