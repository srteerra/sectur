import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './styles.css';

const EnologiaInfo = ({ data }) => {

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
        <div className="container-enologia-info">
            <div className="row">
                <div className="column">
                    <h3 className='info-title reveal-scroll-element' >{data.info1}</h3>
                </div>
                <div className="column">
                    <h3 className='info-title reveal-scroll-element' >{data.info2}</h3>
                </div>
                <div className="column">
                    <h3 className='info-title reveal-scroll-element' >{data.info3}</h3>
                </div>
                <div className="column">
                    <h3 className='info-title reveal-scroll-element' >{data.info4}</h3>
                </div>
            </div>
        </div>
    );
};

export default EnologiaInfo;
