import { render } from '@testing-library/react';
import React from 'react';
import Group from './Group';
import Modal from 'react-modal';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render group', () => {
  const input = {
    id: 4,
    name: 'Cafeteria',
    transactions: [
      {
        id: 16,
        description: '',
        amount: '1.95',
        title: 'Bollo de chocolate',
        date: '12/10/2021',
        person: {
          id: 12,
          name: 'Natalia',
        },
      },
      {
        id: 17,
        description: '',
        amount: '1.10',
        title: 'Café',
        date: '12/05/2021',
        person: {
          id: 15,
          name: 'Miguel',
        },
      },
    ],
    people: [
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
    ],
  };
  Modal.setAppElement = () => null;
  render(<Group {...input} />);
});
