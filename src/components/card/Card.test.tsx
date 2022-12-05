import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render card', () => {
  const input = {
    id: 1,
    description: 'First payment',
    amount: '20',
    title: 'Bizcocho',
    date: '12/10/2022',
    person: {
      id: 2,
      name: 'Maria',
    },
  };
  render(<Card {...input} />);
});
