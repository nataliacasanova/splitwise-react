import * as React from 'react';
import { BsFillPersonPlusFill, BsPersonCircle } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { CAFETERIA_USERS, GroupModel } from './group.model';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import './group.css';

const Group = (props: GroupModel) => {
  const [userList, setUserList] = useState(CAFETERIA_USERS);
  const [newUser, setNewUser] = useState('');
  const { name, transactions } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  Modal.setAppElement('#root');

  const openModal = (nameGrp: string) => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addUser = () => {
    setNewUser('');
    userList.push(newUser);
    console.log(userList);
  };

  return (
    <>
      <div className='group-wrapper'>
        <div className='group-heading'>
          <p className='group-name'>{name}</p>
          <div className='group-heading-icons'>
            <div>
              <BsFillPersonPlusFill
                onClick={() => {
                  openModal(name);
                }}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div onClick={() => navigate('/card-detail')}>
              <IoIosAddCircle style={{ fontSize: '20px' }} />
            </div>
            <div>
              <FaBalanceScale style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
        {transactions?.map((transaction) => {
          return (
            <>
              <Card key={transaction.title} {...transaction}></Card>
            </>
          );
        })}
      </div>
      <Modal isOpen={open} onRequestClose={closeModal} className='modal'>
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
                {userList.map((user) => {
                  return <p>{user}</p>;
                })}
              </div>
              <div className='modal-action'>
                <input
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  type='textarea'
                ></input>
                <button onClick={addUser}>Añadir</button>
              </div>
            </div>
            <div className='modal-footer'>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </>
        </div>
      </Modal>
    </>
  );
};

export default Group;
