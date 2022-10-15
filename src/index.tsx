import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './components/card-detail/Card-detail';

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to React and TypeScript</h1>
    <div>
      <Card
        description={'Este es el primer pago'}
        amount={'12€'}
        title={'Compra'}
        date={'12/10/2022'}
        person={'Natalia'}
        buttonCancel={'Eliminar Gasto'}
        buttonSave={'Guardar Gasto'}
        operation={'Añadir gasto'}
      />
    </div>
  </div>,
  document.getElementById('root')
);
