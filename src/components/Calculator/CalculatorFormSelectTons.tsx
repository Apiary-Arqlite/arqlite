import React, { useContext } from 'react';
import { FormSelectProps } from '../Form/FormTypes';
import { FormContext } from '../Form/FormCtx';
import {
  StyledFormSelect,
  InnerWrapper,
  Carat,
  StyledFormSelectDiv,
  StyledLabel,
  StyledSelectDiv,
  StyledInfoButton,
  DropdownItems,
  StyledTooltip,
} from '../Form/FormSelect';
import carat from '../../images/down-icon.png';
import styled from 'styled-components';

const StyledFormSelectTons = styled(StyledFormSelect)`
  margin: 0;
  padding: 0;
  width: 870px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 343px;
    height: 90px;
  }
`;

const StyledSelectTons = styled(StyledSelectDiv)`
  @media (max-width: 1000px) {
    width: 303px;
  }
`;

const DropdownItemsTons = styled(DropdownItems)`
  width: 870px;
  display: none;

  @media (max-width: 1000px) {
    width: 343px;
  }
  z-index: 1;
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name, description } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <StyledFormSelectTons>
      <InnerWrapper>
        <StyledFormSelectDiv>
          <StyledLabel>{label}</StyledLabel>
          <StyledTooltip title={description}>
            <StyledInfoButton>&#9432;</StyledInfoButton>
          </StyledTooltip>
        </StyledFormSelectDiv>

        <StyledSelectTons<any>
          name={name}
          value={Number(currentValue)}
          onChange={handleFormChange}
        >
          <DropdownItemsTons>{props.children}</DropdownItemsTons>
        </StyledSelectTons>
      </InnerWrapper>
      <Carat>
        <img src={carat} alt='carat'></img>
      </Carat>
    </StyledFormSelectTons>
  );
}
