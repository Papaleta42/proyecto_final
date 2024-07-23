import React from 'react';

const Formulario = () => {
  return (
    <div className='container'>
    <div className='col-6'>
      <div className='col'>
        <label htmlFor='nombre' className='form-label'>Nombre</label>
        <input type='text' id='nombre' className='form-control' />
      </div>
      <div className='col'>
        <button type='button' className='btn btn-primary'>Buscar</button>
      </div>
    </div>
    <div className='col-6'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Plataforma</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
  </div>
  
  
  );
}

export default Formulario;
