import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './subheader.css';

interface SubheaderModel {
  title: string;
  clickedIcon: () => void;
}

const Subheader = ({ title, clickedIcon }: SubheaderModel) => {
  return (
    <div className='subheader'>
      <div className='subheader-icon' onClick={() => clickedIcon()}>
        <AiOutlineArrowLeft style={{ fontSize: '20px' }} />
      </div>
      <p className='subheader-title'>{title}</p>
    </div>
  );
};

export default Subheader;
