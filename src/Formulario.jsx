import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [juegos, setJuegos] = useState([]);
  const [search, setSearch] = useState('');   
  const [filteredJuegos, setFilteredJuegos] = useState([]);
  const url = "http://45.236.130.191/juegos.php";

  useEffect(() => {
    axios.get(url)
      .then(response => {
        if (Array.isArray(response.data)) {
          localStorage.setItem("juegos", JSON.stringify(response.data));
          setJuegos(response.data);
         
        } else {
          console.error("Datos inesperados:", response.data);
        }
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleBuscar = () => {
    const juegosGuardados = JSON.parse(localStorage.getItem("juegos")) || [];
    const filtered = juegosGuardados.map((genero) => ({
      ...genero,
      juegos: genero.juegos.filter((juego) =>
        juego.titulo.toLowerCase().includes(search.toLowerCase())
      ),
    })).filter(genero => genero.juegos.length > 0);

    setFilteredJuegos(filtered);
  };

  const handleOnChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='container'>
      <div className='col-7'>
      <div className='row'>
        <div className='col'>
          <br />
          <label htmlFor='nombre' className='form-label'>Nombre</label>
          <input type='text' id='nombre' className='form-control' onChange={handleOnChangeSearch} />
        </div>
        <div>
          <br />
          <button type='button' className='btn btn-primary' onClick={handleBuscar}>Buscar</button>
        </div>
      </div>
      <br />
      <div className='row'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Título</th>
              <th>Género</th>
              <th>Plataforma</th>
            </tr>
          </thead>
          <tbody>
            {filteredJuegos.length > 0 ? (
              filteredJuegos.map((genero, index) => (
                genero.juegos.map((juego, index2) => (
                  <tr key={`${index}-${index2}`}>
                    <td>{juego.titulo || 'No disponible'}</td>
                    <td>{genero.genero || 'No disponible'}</td>
                    <td>{juego.plataforma.join(', ') || 'No disponible'}</td>
                  </tr>
                ))
              ))
            ) : (
              <tr>
                <td colSpan="3">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>);
};

export default Formulario;
