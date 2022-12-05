// /* eslint-disable testing-library/no-unnecessary-act */
// /**
//  * @jest-environment jsdom
//  * @jest-environment-options {"html": "<!doctype html><html><body><div id='root'></div></body></html>"}
//  */

import { render } from '@testing-library/react';
import React from 'react';
import { App } from '.';

const response = {
  id: 11,
  name: 'Cafeteria',
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
};
let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response }),
  })
) as jest.Mock;

test('renders Index', () => {
  render(<App />);
});

// import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from '.';

// jest.mock('react-dom/client', () => ({
//   createRoot: jest.fn().mockImplementation(() => ({
//     render: jest.fn(),
//   })),
// }));

// xdescribe('Application root', () => {
//   it('should render without crashing', () => {
//     const div = document.createElement('div');
//     div.id = 'root';
//     document.body.appendChild(div);
//     require('./index.tsx');
//     render(<App />);
//   });
// });
