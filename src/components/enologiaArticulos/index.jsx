import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const EnologiaArticulos = ({ data }) => {

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
    <div className="container-enologia-articulos">
      {/* Primera fila */}
      <div className="enologia-articulos-row">
        <div className="enologia-articulos-left-column">
          <h2 className='enologia-articulos-subtitle reveal-scroll-element'>{data.tituloArticuloUno}</h2>
          <p className="enologia-articulos-paragraph reveal-scroll-element">
            {data.Parrafo1Articulo1}
          </p>
          <p className="enologia-articulos-paragraph reveal-scroll-element">
            {data.Parrafo2Articulo2}
          </p>
        </div>
        <div className="enologia-articulos-right-column">
          <LazyLoadImage
            src={require(`../../assets/img/${data.regiones}`)}
            alt="Imagen"
            className="reveal-scroll-element lazy-loaded-image-articulos-eno"
          />
        </div>
      </div>
      {/* Segunda fila */}
      <div className="enologia-articulos-row">
        <div className="enologia-articulos-left-column">
          <LazyLoadImage
            src={require(`../../assets/img/${data.marcas}`)}
            alt="Imagen"
            className="reveal-scroll-element lazy-loaded-image-articulos-eno"
          />
        </div>
        <div className="enologia-articulos-right-column">
          <h2 className='enologia-articulos-subtitle reveal-scroll-element'>{data.titulo2ArticuloDos}</h2>
          <p className="enologia-articulos-paragraph reveal-scroll-element">
            {data.Parrafo1Articulo2}
          </p>
          <p className="enologia-articulos-paragraph  reveal-scroll-element">
            {data.Parrafo3Articulo2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnologiaArticulos;
