import * as React from 'react';
import { useEffect, useState } from 'react';
import Group from '../../components/group/Group';
import { GroupModel } from '../../components/group/group.model';
import TopContainer from '../top-container/TopContainer';
import { BILLS } from './dashboard-model';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState('');
  const [array] = useState(BILLS);

  const childToParent = (value: string) => {
    setData(value);
  };

  return (
    <>
      <h2 className='title'>SplitWise React App</h2>
      <div className='main'>
        <div className='main-header'>
          <TopContainer childToParent={childToParent} />
        </div>
        <div className='main-content'>
          {array
            ?.filter((element) =>
              element.name.toLowerCase().includes(data.toLowerCase())
            )
            .map((element: GroupModel, index) => {
              return (
                <>
                  <Group
                    key={index}
                    name={element?.name}
                    transactions={element?.transactions}
                  ></Group>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
