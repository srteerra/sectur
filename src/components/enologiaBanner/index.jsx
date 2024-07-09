import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css'; // Importar los estilos CSS

const EnologiaBanner = ({ data }) => {

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
    <div className="banner-enologia-container reveal-scroll-element">
      <LazyLoadImage
        src={require(`../../assets/img/${data.bannerEnologia}`)}
        alt="Banner de Enologia"
        className="banner-imagen"
      />
    </div>
  );
};

export default EnologiaBanner;
