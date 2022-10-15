import * as React from 'react';
import { InputModel } from './input.model';
import './input.css';

const Input = (props: InputModel) => {
  const { type, value, id, placeholder } = props || {};

  return (
    <>
      <input
        className='input'
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;
