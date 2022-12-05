import * as React from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { GroupModel } from './group.model';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNewUser from '../../pages/add-new-user/AddNewUser';
import { CardModel } from '../../pages/card-detail/card-detail.model';
import Card from '../card/Card';
import './group.css';
import PersonListContext from '../../context/person.context';

const Group = (props: GroupModel) => {
  const { name, transactions, people, id } = props ?? {};

  const [personList, updatePersonList] = useState(people);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  Modal.setAppElement('#root');

  const onClickAddGasto = () => {
    navigate('/card-detail', {
      state: {
        options: people,
        id,
        disabled: false,
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
    personList.push(inputUser);
  };

  return (
    <>
      <PersonListContext.Provider value={{ personList, updatePersonList }}>
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
              <div onClick={() => onClickAddGasto()}>
                <IoIosAddCircle style={{ fontSize: '20px' }} />
              </div>
              <div onClick={() => navigate(`/balance/${id}`)}>
                <FaBalanceScale style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
          {transactions?.map((transaction: CardModel, index) => {
            return (
              <>
                <Card key={index.toString()} {...transaction}></Card>
              </>
            );
          })}
        </div>
        <Modal isOpen={open} onRequestClose={closeModal} className='modal'>
          <AddNewUser
            arrayList={personList}
            addUser={addUser}
            closeModal={closeModal}
          ></AddNewUser>
        </Modal>
      </PersonListContext.Provider>
    </>
  );
};

export default Group;
