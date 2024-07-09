import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const EnologiaTurismo = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.container-enologia-turismo');
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

    const listaItems = data.lista.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <div className={`container-enologia-turismo ${isVisible ? 'reveal-scroll visible' : ''}`}>
            <div className="enologia-left-column">
                <LazyLoadImage
                    src={require(`../../assets/img/${data.imgTurismo}`)}
                    alt="Imagen"
                    className="lazy-loaded-image-enoturismo"
                />
            </div>
            <div className="enologia-right-column">
                <h2 className='enologia-subtitle'>{data.subtitle}</h2>
                <p className="enologia-paragraph">
                    {data.paragraph} <a className='enologia-strong-p' href="https://www.unwto.org/es/gastronomia-turismo-enologico">{ data.onulink }</a> {data.onuafterlink}
                </p>
                <div className="quote-container">
                    <p className="enologia-quote">{data.quoteP}</p>
                </div>
                <p className='enologia-strong-p'>{ data.strongP }</p>
                <ul className="enologia-list">
                    {listaItems}
                </ul>
                <p className='entidades'><strong>{ data.entidades }</strong></p>
            </div>
        </div>
    );
};

export default EnologiaTurismo;
