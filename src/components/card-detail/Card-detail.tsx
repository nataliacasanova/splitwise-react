import * as React from 'react';
import { BillModel } from './card-detail.model';
import './card-detail.css';
import Input from '../input/Input';

const Card = (props: BillModel) => {
  const {
    description,
    date,
    amount,
    person,
    title,
    buttonCancel,
    buttonSave,
    operation,
  } = props || {};
  return (
    <>
      <form className='card'>
        <p className='card--title'>{operation}</p>
        <div className='card--body'>
          <label htmlFor='title' className='card--body-item'>
            Título:
            <Input
              type={'text'}
              value={title}
              id={'title'}
              placeholder={'Titulo'}
            ></Input>
          </label>
          <label htmlFor='amount' className='card--body-item'>
            Cantidad:
            <Input
              type={'text'}
              value={amount}
              id={'amount'}
              placeholder={'Cantidad'}
            />
          </label>
          <label htmlFor='description' className='card--body-item'>
            Descripción:
            <Input
              type={'text'}
              value={description}
              id={'description'}
              placeholder={'Descripción'}
            />
          </label>
          <label htmlFor='date' className='card--body-item'>
            Fecha:
            <input type='text' value={date} id='date' placeholder='Fecha' />
          </label>
          <label htmlFor='person' className='card--body-item'>
            Pagado por:
            <Input
              type={'text'}
              value={person}
              id={'person'}
              placeholder={'Pagado por'}
            />
          </label>
        </div>
        <div className='card--buttons'>
          <button>{buttonSave}</button>
          <button>{buttonCancel}</button>
        </div>
      </form>
    </>
  );
};

export default Card;
