import * as React from 'react';
import { useContext, useState } from 'react';
import Group from '../../components/group/Group';
import { GroupModel } from '../../components/group/group.model';
import TopContainer from '../../components/top-container/TopContainer';
import GroupContext from '../../context/group.context';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState('');
  const { groups } = useContext(GroupContext);

  const searchGroup = (value: string) => {
    setData(value);
  };

  return (
    <>
      <h2 className='title'>SplitWise React App</h2>
      <div className='main'>
        <div className='main-header'>
          <TopContainer searchGroup={searchGroup} />
        </div>
        <div className='main-content'>
          {groups
            ?.filter((element: GroupModel) =>
              element.name.toLowerCase().includes(data.toLowerCase())
            )
            .map((element: GroupModel, index: number) => {
              return (
                <>
                  <Group key={index.toString()} {...element}></Group>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
