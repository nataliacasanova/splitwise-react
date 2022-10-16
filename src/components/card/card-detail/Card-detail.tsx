import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../input/Input';
import './card-detail.css';
import { PERSONAS } from './card-detail.model';

const CardDetail = () => {
  const location = useLocation();
  const props = location?.state;

  const [title, setTitle] = useState(props?.title || '');
  const [amount, setAmount] = useState(props?.amount || '');
  const [description, setDescription] = useState(props?.description || '');
  const [date, setDate] = useState(props?.date || '');
  const [person, setPerson] = useState(props?.person || '');

  const getTitle = (value: string) => {
    setTitle(value);
  };

  const getAmount = (value: string) => {
    setAmount(value);
  };

  const getDescription = (value: string) => {
    setDescription(value);
  };

  const getDate = (value: string) => {
    setDate(value);
  };

  const handleSubmit = (event: any) => {
    console.log(title, amount, description, date, person);

    event.preventDefault();
  };

  return (
    <>
      <form className='card' onSubmit={handleSubmit}>
        <p className='card--title'>Añadir gasto</p>
        <div className='card--body'>
          <label htmlFor='title' className='card--body-item'>
            Título:
            <Input
              type={'text'}
              value={title}
              id={'title'}
              placeholder={'Titulo'}
              setValue={getTitle}
              required={true}
            ></Input>
          </label>
          <div className='item-amount'>
            <label htmlFor='amount' className='card--body-item'>
              Cantidad:
              <Input
                type={'text'}
                value={amount}
                id={'amount'}
                placeholder={'Cantidad'}
                setValue={getAmount}
                required={true}
              />
            </label>
            {/* <label className='card--body-item'>
              Moneda:
              <select name='divisa' placeholder='Moneda'>
                <option key=''></option>
                {DIVISA.map((moneda) => (
                  <option key={moneda}>{moneda}</option>
                ))}
              </select>
            </label> */}
          </div>
          <label htmlFor='description' className='card--body-item'>
            Descripción:
            <Input
              type={'text'}
              value={description}
              id={'description'}
              placeholder={'Descripción'}
              setValue={getDescription}
              required={false}
            />
          </label>
          <label htmlFor='date' className='card--body-item'>
            Fecha:
            <Input
              type={'text'}
              value={date}
              id={'date'}
              placeholder={'Fecha'}
              setValue={getDate}
              required={true}
            />
          </label>
          <label htmlFor='person' className='card--body-item'>
            Pagado por:
            <select
              name='person'
              placeholder='Pagado por'
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              required
            >
              <option key=''></option>
              {PERSONAS.map((persona) => (
                <option key={persona}>{persona}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='card--buttons'>
          <button>Guardar Gasto</button>
          <button>Eliminar Gasto</button>
        </div>
      </form>
    </>
  );
};

export default CardDetail;
