import React, { useContext } from 'react';
import { FormSelectProps } from '../Form/FormTypes';
import { FormContext } from '../Form/FormCtx';
import {
  StyledFormSelect,
  StyledFormSelectDiv,
  StyledLabel,
  StyledSelectDiv,
  StyledInfoButton,
} from '../Form/FormSelect';
import styled from 'styled-components';

const StyledFormSelectTons = styled(StyledFormSelect)`
  width: 870px;
`;

const StyledSelectTons = styled(StyledSelectDiv)`
  width: 830px;
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <StyledFormSelectTons>
      <StyledFormSelectDiv>
        <StyledLabel>{label}</StyledLabel>
        <StyledInfoButton>&#9432;</StyledInfoButton>
      </StyledFormSelectDiv>

      <StyledSelectTons<any>
        name={name}
        value={Number(currentValue)}
        onChange={handleFormChange}
      >
        <ul>{props.children}</ul>
      </StyledSelectTons>
    </StyledFormSelectTons>
  );
}
