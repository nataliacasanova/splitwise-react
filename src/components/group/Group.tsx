import * as React from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { GroupModel } from './group.model';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNewUser from '../../pages/add-new-user/AddNewUser';
import Card from '../card/Card';
import './group.css';
import { CardModel } from '../../pages/card-detail/card-detail.model';

const Group = (props: GroupModel) => {
  const { name, transactions, people } = props || {};

  const [userList] = useState(people);
  const [newUser, setNewUser] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  Modal.setAppElement('#root');

  const onClickDetail = () => {
    navigate('/card-detail', {
      state: {
        options: people,
      },
    });
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addUser = (value: string) => {
    const index = people.length + 1;
    const inputUser = { id: index, name: value };
    userList.push(inputUser);
    setNewUser(value);
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
                  openModal();
                }}
              />
            </div>
            <div onClick={() => onClickDetail()}>
              <IoIosAddCircle style={{ fontSize: '20px' }} />
            </div>
            <div>
              <FaBalanceScale style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
        {transactions?.map((transaction: CardModel, index) => {
          return (
            <>
              <Card key={index} {...transaction}></Card>
            </>
          );
        })}
      </div>
      <Modal isOpen={open} onRequestClose={closeModal} className='modal'>
        <AddNewUser
          arrayList={userList}
          addUser={addUser}
          closeModal={closeModal}
        ></AddNewUser>
      </Modal>
    </>
  );
};

export default Group;
