import React from 'react';

export default function Option(props) {
  return <option selected={props.selected}>${props.value}</option>;
}
