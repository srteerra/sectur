import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const EnologiaDescarga = ({ data }) => {


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
    <div className="container-enologia-descarga">
      <div className="enologia-descarga-content reveal-scroll-element">
        <h3 className='parrafo-wrap'>{ data.conocesCatalogo }</h3>
        <LazyLoadImage
          src={require(`../../assets/img/${data.imgDescarga}`)}
          alt="Imagen"
          className="lazy-loaded-image"
        />
        <a href={data.downloadLink} download className="descarga-link reveal-scroll-element">
          {data.enologiaDescarga}
        </a>
      </div>
    </div>
  );
};

export default EnologiaDescarga;
