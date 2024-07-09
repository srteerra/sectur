import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';


const EnologiaDestinos = ({ data }) => {
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
    <div>
    <div className="contenido-superior">
        <h2 className='enologia-header-title reveal-scroll-element'>{ data.destinosTitle }</h2>
      </div>
    <div className="mapa-mexico-enologia reveal-scroll-element">

    <img src={require(`../../assets/img/${data.mapaMexico}`)} alt="Mapa de México" style={{ width: '80%', height: 'auto' }} />
      
    </div>
   
    </div>
  )
  }
  
  export default EnologiaDestinos;