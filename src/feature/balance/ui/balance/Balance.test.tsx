import React from 'react';
import { GroupProvider } from '../../../../context/group.context';

import { GroupModel } from '../../../../core/components/group/group.model';


import Balance from './Balance';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render balance', () => {
  const groups: GroupModel[] = [
    {
      name: 'Prueba 1',
      transactions: [{
        id: 1,
        description: 'Testing',
        amount: '5',
        title: 'Prueba de test',
        date: '12/10/2000',
        person: {
          id: 0,
          name: 'Pedro'
        }
      }],
      id: 12,
      people: [
        {
          id: 1, name: 'Ana'
        },{
          id: 2, name: 'Maria'
        },
        {
          id: 3, name: 'Pablo'
        }
      ]
    },
  ]

  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  <GroupProvider groups={groups}>
    render(
    <Balance />
    );
  </GroupProvider>
});
