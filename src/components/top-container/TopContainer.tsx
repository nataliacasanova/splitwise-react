import { useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Input from '../card/input/Input';
import { GroupModel } from '../group/group.model';
import './top-container.css';

const TopContainer = ({ searchGroup, setGroups }: any) => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);

  const getValue = (value: string) => {
    setSearch(value);
  };

  const openModal = () => {
    setTitle('');
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  }

  const setNewGroup = (group: any) => {
   

  };

  const handleSubmit = (e: any) => {
    const group: GroupModel = {
      name: title,
      transactions: [],
      people: []
    };
    setGroups(group);
    closeModal();
    e.preventDefault();
  }

  const getTitle = (title: string) => {
    setTitle(title);
  }

  return (

    <>
      <div className='top-container'>
        <div className='search-container'>
          <div className='container-content'>
            <Input
              type={'text'}
              id={'search'}
              placeholder={'Search group...'}
              value={search}
              setValue={getValue} />
          </div>
          <button className='container-action' onClick={() => searchGroup(search)}>
            Buscar
          </button>
        </div>
        <div className='group-container'>
          <button onClick={() => openModal()} className='container-action'> Add Group
            <AiOutlineUsergroupAdd className='icon' />
          </button>
        </div>
      </div>
      <Modal isOpen={open} onRequestClose={closeModal} className='modal-group'>
        <div className='body'>
          <form className='card' onSubmit={handleSubmit}>
            <p className='card--title'>Añadir nuevo grupo</p>
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
            </div>
            <div className='card--buttons'>
              <button>Guardar Grupo</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TopContainer;
