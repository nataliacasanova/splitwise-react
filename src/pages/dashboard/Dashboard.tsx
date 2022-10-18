import * as React from 'react';
import { useEffect, useState } from 'react';
import Group from '../../components/group/Group';
import { GroupModel } from '../../components/group/group.model';
import TopContainer from '../../components/top-container/TopContainer';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState('');
  const [array, setArray] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson: GroupModel[]) {
        setArray(myJson);
      });
  };

  const searchGroup = (value: string) => {
    setData(value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className='title'>SplitWise React App</h2>
      <div className='main'>
        <div className='main-header'>
          <TopContainer searchGroup={searchGroup} />
        </div>
        <div className='main-content'>
          {array
            ?.filter((element) =>
              element.name.toLowerCase().includes(data.toLowerCase())
            )
            .map((element: GroupModel, index) => {
              return (
                <>
                  <Group key={index} {...element}></Group>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
