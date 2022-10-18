import * as React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { CardModel } from '../../pages/card-detail/card-detail.model';
import './card.css';
import FilledBox from './filled-box/FilledBox';
import OutlineBox from './outline-box/OutlineBox';

const Card = (props: CardModel) => {
  const { amount, person, title, id } = props || {};
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate('/card-detail', {
      state: {
        ...props,
        disabled: true,
        operation: 'Detalle de gasto',
      },
    });
  };

  return (
    <div className='card-wrapper'>
      <div className='card-content'>
        <p className='card-title'>{title}</p>
        <div className='card-body'>
          <FilledBox text={amount} />
          <OutlineBox text={person?.name} />
        </div>
      </div>
      <div onClick={() => onClickDetail()}>
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Card;
