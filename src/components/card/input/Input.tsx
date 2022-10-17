import * as React from 'react';
import './input.css';

const Input = ({
  type,
  id,
  placeholder,
  value,
  setValue,
  required,
  childToParent,
}: any) => {
  return (
    <>
      <input
        className='input'
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      ></input>
    </>
  );
};

export default Input;
