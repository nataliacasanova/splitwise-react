import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';

test('renders content', () => {
  render(<Dashboard />);
  screen.getByText('SplitWise React App');
});
