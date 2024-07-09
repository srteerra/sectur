import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './styles.css';

const EnologiaProduccion = ({ data }) => {

  useEffect(() => {
    ScrollReveal().reveal('.reveal-scroll-element', {
        delay: 200, // Retraso antes de que se aplique la animación (en milisegundos)
        duration: 1000, // Duración de la animación (en milisegundos)
        origin: 'bottom', // Desde dónde aparecerá el elemento (top, right, bottom, left)
        distance: '20px', // Distancia desde la que se desplazará el elemento
        easing: 'ease-in-out', // Tipo de efecto (linear, ease, ease-in, ease-out, ease-in-out)
        interval: 100 // Intervalo entre animaciones (en milisegundos)
    });
}, []);  

  return (
    <>
      <div className="containerProduccion">
        <div className="row">
          <div className='column'>
              <h2 className='titleProduccion reveal-scroll-element'>{data.titleProduccion}</h2>
          </div>
        </div>
        <div className="rowProduccion">
          {data.produccionColumnas.map((columna, index) => (
            <div className="column" key={index}>
                <div className="icon-container reveal-scroll-element">
                  <img className="icon-img" src={require(`../../assets/img/${columna.imagen}`)} alt={`Icono ${index + 1}`} />
                </div>
                <p className='reveal-scroll-element'>{columna.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnologiaProduccion;
