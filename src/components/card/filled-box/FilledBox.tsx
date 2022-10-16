import * as React from 'react';
import './filled-box.css';

const FilledBox = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className='filledbox'>
      <p className='box-text'>{text}€</p>
    </div>
  );
};

export default FilledBox;
