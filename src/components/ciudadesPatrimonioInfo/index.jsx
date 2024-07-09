import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const CiudadesPatrimonioInfo = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.container-ciudades-info');
            if (!element) return; // Salir si el elemento no está presente
            const topElement = element.getBoundingClientRect().top;
            const height = window.innerHeight;
            if (topElement < height - height / 4) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        // Verificar si el elemento es visible cuando se carga la página
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   

    return (
        <>
        <div className={`container-ciudades-info ${isVisible ? 'reveal-scroll visible' : ''}`}>
            <div className="ciudades-left-column">
                <LazyLoadImage
                    src={require(`../../assets/img/${data.imgTurismo}`)}
                    alt="Imagen"
                    className="lazy-loaded-image"
                />
            </div>
            <div className="ciudades-right-column">
                <a className='ciudades-link' href="https://www.ciudadespatrimonio.mx/"><h2 className='ciudades-subtitle'>{data.subtitle}</h2></a>
                <p className="ciudades-paragraph">
                    {data.paragraph}
                </p>
            </div>
        </div>
        </>
    );
};

export default CiudadesPatrimonioInfo;
