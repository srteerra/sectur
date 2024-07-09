// EnologiaBento.jsx

import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const EnologiaBento = ({ data }) => {
    useEffect(() => {
        // Verificar si las imágenes inicialmente visibles están en el viewport
        const initiallyVisibleImages = document.querySelectorAll('.initially-visible');
        initiallyVisibleImages.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add('visible');
            }
        });

        // Función para verificar si un elemento está en el viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Función para manejar el evento de scroll
        function handleScroll() {
            initiallyVisibleImages.forEach(image => {
                if (isInViewport(image)) {
                    image.classList.add('visible');
                }
            });
        }

        // Agregar evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className="container-bento">
                <div className="Imagen-1 initially-visible">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem1}`)}
                        alt="Imagen1"
                        className="lazy-loaded-image-enoturismo"
                    />
                </div>
                {/* Agrega las clases initially-visible y visible a las imágenes que deben ser reveladas inicialmente */}
                {/* Las otras imágenes tendrán solo la clase reveal-scroll */}
                <div className="Imagen-3 initially-visible reveal-scroll">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem3}`)}
                        alt="Imagen3"
                        className="lazy-loaded-image-enoturismo"
                    />
                </div>
                <div className="Imagen-2 initially-visible reveal-scroll">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem5}`)}
                        alt="Imagen2"
                        className="lazy-loaded-image-enoturismo"
                    />
                </div>
                <div className="Imagen-4 initially-visible reveal-scroll">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem4}`)}
                        alt="Imagen4"
                        className="lazy-loaded-image-enoturismo"
                    />
                </div>
                <div className="Imagen-5 initially-visible reveal-scroll">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem2}`)}
                        alt="Imagen5"
                        className="lazy-loaded-image-enoturismo"
                    />
                </div>
            </div>
            <h1 className='enologia-title'>{ data.title }</h1>
        </>
    );
};

export default EnologiaBento;
