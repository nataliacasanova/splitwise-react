import * as React from 'react';
import { GroupModel } from './group.model';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import { FaBalanceScale } from 'react-icons/fa';

import Card from '../card/Card';
import './group.css';
import { useNavigate } from 'react-router-dom';

const Group = (props: GroupModel) => {
  const { name, transactions } = props;
  const navigate = useNavigate();
  return (
    <div className='group-wrapper'>
      <div className='group-heading'>
        <p className='group-name'>{name}</p>
        <div className='group-heading-icons'>
          <div>
            <BsFillPersonPlusFill style={{ fontSize: '20px' }} />
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
  );
};

export default Group;
