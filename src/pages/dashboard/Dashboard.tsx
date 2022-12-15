import { useState } from 'react';
import Modal from 'react-modal';
import Group from '../../components/group/Group';
import { GroupModel } from '../../components/group/group.model';
import TopContainer from '../../components/top-container/TopContainer';
import { useGroupContext } from '../../context/group.context';

import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState('');
  const { groups, updateGroups } = useGroupContext();

  Modal.setAppElement('#root');

  const searchGroup = (value: string) => {
    setData(value);
  };

  const setGroups = (group: GroupModel) => {
    console.log(groups);
    const currenGroupIndex = groups.findIndex(
      (element: GroupModel) => element.name === group?.name
    );
    if (currenGroupIndex === -1) {
      groups.push(group);
      updateGroups(groups);
    }
  }

  return (
    <>
      <h2 className='title'>SplitWise React App</h2>
      <div className='main'>
        <div className='main-header'>
          <TopContainer searchGroup={searchGroup} setGroups={setGroups} />
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
