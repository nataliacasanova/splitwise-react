import { render } from '@testing-library/react';
import React from 'react';
import GroupContext from '../../context/group.context';
import Balance from './Balance';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render balance', () => {
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  <GroupContext.Provider value={}>
    render(
    <Balance />
    );
  </GroupContext.Provider>;
});
