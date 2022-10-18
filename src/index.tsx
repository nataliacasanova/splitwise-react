import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import CardDetail from './pages/card-detail/Card-detail';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/card-detail' element={<CardDetail />} />
          <Route index path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


