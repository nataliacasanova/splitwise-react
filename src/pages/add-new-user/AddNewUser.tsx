import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Person } from '../../components/group/group.model';

const AddNewUser = ({ arrayList, addUser, closeModal }: any) => {
  const [newUser, setNewUser] = useState('');

  const changeUserState = (value: string) => {
    addUser(value);
    setNewUser('');
  };

  return (
    <div className='content'>
      <>
        <div className='modal-body'>
          <div className='modal-header'>
            <div className='modal-header-icon'>
              <BsPersonCircle />
            </div>
            <h2 className='modal-title'>Añadir persona</h2>
          </div>
          <div className='modal-content'>
            {arrayList.map((user: Person, index: number) => {
              return <p key={index}>{user.name}</p>;
            })}
          </div>
          <div className='modal-action'>
            <input
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              type='textarea'
            ></input>
            <button onClick={() => changeUserState(newUser)}>Añadir</button>
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={() => closeModal()}>Cerrar</button>
        </div>
      </>
    </div>
  );
};

export default AddNewUser;
