import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CardDetail from './components/card/card-detail/Card-detail';
import Group from './components/group/Group';
import './index.css';
import Dashboard from './pages/dashboard/Dashboard';

const expense = {
  description: 'Este es el primer pago',
  amount: '12€',
  title: 'Compra',
  date: '12/10/2022',
  person: 'Natalia',
  buttonCancel: 'Eliminar Gasto',
  buttonSave: 'Guardar Gasto',
  operation: 'Añadir gasto',
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/card-detail' element={<CardDetail />} />
          <Route
            path='/home'
            element={<Group name={'Viaje a Madrid'} transactions={[expense]} />}
          />
          <Route index path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


