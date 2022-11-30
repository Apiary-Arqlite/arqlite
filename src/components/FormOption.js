import React from 'react';

export default function FormOption(props) {
  return <option selected={props.selected}>${props.value}</option>;
}
