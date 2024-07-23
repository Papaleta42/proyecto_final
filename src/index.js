import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './Formulario'; // creo que el error es que se borra algo solo de los archivos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario /> 
  </React.StrictMode>
);
