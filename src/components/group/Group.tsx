import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { GroupModel } from './group.model';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGroupContext } from '../../context/group.context';
import PersonListContext from '../../context/person.context';
import AddNewUser from '../../pages/add-new-user/AddNewUser';
import { CardModel } from '../../pages/card-detail/card-detail.model';
import Card from '../card/Card';
import './group.css';

const Group = (props: GroupModel) => {
  const { name, transactions, people, id } = props ?? {};

  const [personList, updatePersonList] = useState(people);
  const [open, setOpen] = useState(false);
  const { groups, updateGroups } = useGroupContext();
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


  const setNewGroup = (group: any) => {
    const currenGroupIndex = groups.findIndex(
      (group: GroupModel) => group.name === props?.name
    );

    if (currenGroupIndex !== -1) {
      groups[currenGroupIndex].transactions.push({
        ...group,
        id: groups[currenGroupIndex].transactions?.length + 1,
      });
    }

    updateGroups(groups);
    navigate('/');
  };

  const handleSubmit = (event: any) => {
    const group: GroupModel = {
      name: event,
      transactions: [],
      people: []
    };
    setNewGroup(group);
    event.preventDefault();
  };

  const openModal =  ()=> {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addUser = (value: any) => {
    const index = people.length + 1;
    const inputUser = { id: index, name: value };
    // useCaseContainer(AddNewPerson).execute(inputUser)
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
                <BsFillPersonPlusFill className='icon'
                  onClick={() => {
                    openModal();
                  }}
                />
              </div>
              <div onClick={() => onClickAddGasto()}>
                <IoIosAddCircle className='icon' style={{ fontSize: '20px' }} />
              </div>
              <div onClick={() => navigate(`/balance/${id}`)}>
                <FaBalanceScale className='icon'style={{ fontSize: '20px' }} />
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
