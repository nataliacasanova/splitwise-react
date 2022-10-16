import * as React from 'react';
import { CardModel } from './card-detail/card-detail.model';
import { MdArrowForwardIos } from 'react-icons/md';
import './card.css';
import FilledBox from './filled-box/FilledBox';
import OutlineBox from './outline-box/OutlineBox';
import { useNavigate } from 'react-router-dom';

const Card = (props: CardModel) => {
  const { amount, person, title } = props || {};
  const navigate = useNavigate();

  return (
    <div className='card-wrapper'>
      <div className='card-content'>
        <p className='card-title'>{title}</p>
        <div className='card-body'>
          <FilledBox text={amount} />
          <OutlineBox text={person} />
        </div>
      </div>
      <div onClick={() => navigate('/card-detail', { state: props })}>
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Card;
