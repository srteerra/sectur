import React from 'react';
import './styles.css';

const MiceClasificacion = ({ data }) => {
  return (
    <>
      <div className="containerClasificacion">
        <div className="row">
          <div className='column'>
              <h2 className='titleClasificacion'>{data.titleClasificacion}</h2>
              <p >{data.descripcionClasificacion}</p>
          </div>
        </div>
        <div className="row">
          {data.clasificacionColumnas.map((columna, index) => (
            <div className="column" key={index}>
                <div className="icon-container">
                  <img className="icon-img" src={require(`../../assets/img/${columna.imagen}`)} alt={`Icono ${index + 1}`} />
                </div>
                <p>{columna.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='cinta-rosa'></div>
    </>
  );
};

export default MiceClasificacion;
