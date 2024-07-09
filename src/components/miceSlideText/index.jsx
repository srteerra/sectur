import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Asegúrate de importar los estilos CSS
import './styles.css';

const MiceSlideText = ({ slides }) => {
  return (
    <div className="custom-carousel"> {/* Aquí agregamos la clase custom-carousel */}
      <Carousel showArrows={true} showThumbs={false}>
        {slides.map((slideText, index) => (
          <div key={index}>
            <p>{slideText}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MiceSlideText;
