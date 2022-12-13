import * as React from 'react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GroupContext from '../../../../context/group.context';
import Input from '../../../../core/components/card/input/Input';
import { Person } from '../../../../core/components/group/group.model';
import Subheader from '../../../../core/components/subheader/Subheader';
import { useCaseContainer } from '../../../../core/hooks/usesCasesContainer';
import { AddExpense } from '../../application/add-expense';
import { newExpense } from '../../domain/models/Expense';
import './card-detail.css';

const CardDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const props = location?.state;

  const [title, setTitle] = useState(props?.title || '');
  const [amount, setAmount] = useState(props?.amount || '');
  const [description, setDescription] = useState(props?.description || '');
  const [date, setDate] = useState(props?.date || '');
  const [person, setPerson] = useState(props?.person || '');
  const [disabled] = useState(props?.disabled || false);
  const [operation] = useState(props?.operation || 'Añadir gasto');
  const [arrayPerson] = useState(props?.options || []);

  const { groups, updateGroups } = useContext(GroupContext);

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

  const setNewGroup = (gasto: newExpense) => {
    useCaseContainer(AddExpense).execute(gasto);
    updateGroups(groups);
    navigate('/');
  };

  const handleSubmit = (event: any) => {
    const gasto = {
      amount,
      date,
      title,
      description,
      person: arrayPerson.find((el: Person) => el.name === person),
    };
    setNewGroup(gasto);
    event.preventDefault();
  };

  const goBack = () => {
    navigate('/');
  };

  const optionList = arrayPerson?.map((persona: Person, index: number) => (
    <option key={persona?.id}>{persona?.name}</option>
  ));

  const renderSelect = () => {
    if (person?.name) {
      return (
        <option className='prueba' key={person.id}>
          {person.name}
        </option>
      );
    }

    if (arrayPerson?.length) {
      return (
        <>
          <option key=''></option>
          {optionList}
        </>
      );
    }
  };

  return (
    <>
      <div>
        <Subheader title={operation} clickedIcon={goBack} />
      </div>
      <div className='body'>
        <form className='card' onSubmit={handleSubmit}>
          <p className='card--title'>{operation}</p>
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
                disabled={disabled}
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
                  disabled={disabled}
                />
              </label>
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
                disabled={disabled}
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
                disabled={disabled}
              />
            </label>
            <label htmlFor='person' className='card--body-item'>
              Pagado por:
              <select
                name='person'
                placeholder='Pagado por'
                onChange={(e) => setPerson(e.target.value)}
                required
                defaultValue={person || ''}
                disabled={disabled}
              >
                {renderSelect()}
              </select>
            </label>
          </div>
          <div className='card--buttons'>
            <button disabled={disabled}>Guardar Gasto</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CardDetail;
