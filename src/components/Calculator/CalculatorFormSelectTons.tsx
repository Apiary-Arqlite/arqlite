import React, { useContext } from 'react';
import { FormSelectProps } from '../Form/FormTypes';
import { FormContext } from '../Form/FormCtx';
import {
  Wrapper,
  LabelWrapper,
  Label,
  Select,
  Info,
  StyledTooltip,
} from '../Form/FormSelect';
import styled from 'styled-components/macro';

const WrapperTons = styled(Wrapper)`
  width: 870px;

  @media (max-width: 1000px) {
    width: 343px;
    height: 90px;
  }
`;

const SelectTons = styled(Select)`
  @media (max-width: 1000px) {
    width: 303px;
  }
`;

export default function FormSelectTons(props: FormSelectProps) {
  const { label, name, description } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <WrapperTons>
      <LabelWrapper>
        <Label>{label}</Label>
        <StyledTooltip title={description}>
          <Info>&#9432;</Info>
        </StyledTooltip>
      </LabelWrapper>

      <SelectTons<any>
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        {props.children}
      </SelectTons>
    </WrapperTons>
  );
}
