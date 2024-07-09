import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MapaDescarga = ({ data }) => {


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
    <div className="container-mapa-descarga">
      <div className="mapa-descarga-content reveal-scroll-element">
        <a href={data.downloadLink} download className="descarga-link reveal-scroll-element">
          {data.mapaDescarga}
        </a>
      </div>
    </div>
  );
};

export default MapaDescarga;
