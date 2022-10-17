import * as React from 'react';
import { BsFillPersonPlusFill, BsPersonCircle } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { CAFETERIA_USERS, GroupModel } from './group.model';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import './group.css';
import AddNewUser from '../add-new-user/AddNewUser';

const Group = (props: GroupModel) => {
  const [userList] = useState(CAFETERIA_USERS);
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

  const addUser = (value: string) => {
    userList.push(value);
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
        {transactions?.map((transaction, index) => {
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
