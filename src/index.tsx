import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GroupModel } from './components/group/group.model';
import { GroupProvider, useGroupContext } from './context/group.context';
import { enviroment } from './enviroment';
import './index.css';
import Balance from './pages/balance/Balance';
import CardDetail from './pages/card-detail/Card-detail';
import Dashboard from './pages/dashboard/Dashboard';

export const App = () => {
  const {groups, updateGroups} = useGroupContext();

  // const getData = () => {
  //   fetch(enviroment.host + enviroment.endpoints.GET_GROUPS, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson: GroupModel[]) {
  //       updateGroups(myJson);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <GroupProvider groups={groups}>
        <BrowserRouter>
          <Routes>
            <Route path='/card-detail' element={<CardDetail />} />
            <Route index path='/balance/:id' element={<Balance />} />
            <Route index path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </GroupProvider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);


