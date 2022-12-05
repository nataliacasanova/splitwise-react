import { render } from '@testing-library/react';
import React from 'react';
import AddNewUser from './AddNewUser';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render add new user', () => {
  const people = [
    {
      id: 12,
      name: 'Natalia',
    },
    {
      id: 13,
      name: 'Pedro',
    },
    {
      id: 14,
      name: 'Maria',
    },
    {
      id: 15,
      name: 'Miguel',
    },
  ];

  render(
    <AddNewUser arrayList={people} addUser={() => {}} closeModal={() => {}} />
  );
});
