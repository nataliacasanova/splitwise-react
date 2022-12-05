import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';

test('renders Dashboard title', () => {
  const view = render(<Dashboard />);
  screen.getByText('SplitWise React App');
  expect(view.container).toHaveTextContent('SplitWise React App');
});
