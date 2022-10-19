import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GroupModel } from './components/group/group.model';
import GroupContext from './context/group.context';
import './index.css';
import Balance from './pages/balance/Balance';
import CardDetail from './pages/card-detail/Card-detail';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  const [groups, updateGroups] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson: GroupModel[]) {
        updateGroups(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GroupContext.Provider value={{ groups, updateGroups }}>
        <BrowserRouter>
          <Routes>
            <Route path='/card-detail' element={<CardDetail />} />
            <Route index path='/balance/:id' element={<Balance />} />
            <Route index path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </GroupContext.Provider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


