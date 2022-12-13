import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import CardDetail from './Card-detail';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render detail card', () => {
  render(<CardDetail />);
});
