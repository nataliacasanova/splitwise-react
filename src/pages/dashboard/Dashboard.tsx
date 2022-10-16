import * as React from 'react';
import Group from '../../components/group/Group';
import { GroupModel } from '../../components/group/group.model';
import { BILLS } from './dashboard-model';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='main'>
      {BILLS.map((element: GroupModel) => {
        return (
          <>
            <Group
              key={element?.name}
              name={element?.name}
              transactions={element?.transactions}
            ></Group>
          </>
        );
      })}
    </div>
  );
};

export default Dashboard;
