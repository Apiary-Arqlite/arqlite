import React from 'react';

export default function Dropdown(props) {
  return (
    <form action={props.action}>
      <label htmlFor='services'>{props.formLabel}</label>
      <div>{/* info hover will go here*/} i </div>
      <select name='services' id='services'>
        {props.children}
      </select>
      {/* might not actually need a submit button, keeping for now */}
      {/* <button type='submit' value={props.buttonText}></button> */}
    </form>
  );
}
