import React, { useContext } from 'react';
import { FormSelectProps } from '../Form/FormTypes';
import { FormContext } from '../Form/FormCtx';
import {
  StyledFormSelect,
  StyledFormSelectDiv,
  StyledLabel,
  StyledSelectDiv,
  StyledInfoButton,
  DropdownItems,
  StyledTooltip,
} from '../Form/FormSelect';
import styled from 'styled-components';

const StyledFormSelectTons = styled(StyledFormSelect)`
  width: 870px;
`;

const StyledSelectTons = styled(StyledSelectDiv)`
  width: 830px;
`;

const DropdownItemsTons = styled(DropdownItems)`
  width: 870px;
`;

export default function FormSelect(props: FormSelectProps) {
  const { label, name, description } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = form[name];

  return (
    <StyledFormSelectTons>
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
    </StyledFormSelectTons>
  );
}

// q: how to style children of an element css?
