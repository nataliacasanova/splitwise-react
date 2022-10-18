import * as React from 'react';
import './input.css';

const Input = ({
  type,
  id,
  placeholder,
  value,
  setValue,
  required = true,
  disabled = false,
}: any) => {
  return (
    <>
      <input
        disabled={disabled}
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
