import * as React from 'react';
import { useState } from 'react';
import Input from '../card/input/Input';
import './top-container.css';

const TopContainer = ({ searchGroup }: any) => {
  const [search, setSearch] = useState('');

  const getValue = (value: string) => {
    setSearch(value);
  };

  return (
    <div className='top-container'>
      <div className='container-content'>
        <Input
          type={'text'}
          id={'search'}
          placeholder={'Search group...'}
          value={search}
          setValue={getValue}
        />
      </div>
      <button className='container-action' onClick={() => searchGroup(search)}>
        Buscar
      </button>
    </div>
  );
};

export default TopContainer;
