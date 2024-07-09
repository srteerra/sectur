import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const CiuadesPatrimonioHeroSlider = ({ data }) => {
  return (
    <div className="hero-slider-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {data.map((slide, index) => (
          <div key={index} className="hero-slide">
            <LazyLoadImage
              src={require(`../../assets/img/${slide}`)}
              alt={`Ciudades Patrimonio ${index}`}
              className="hero-slide-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CiuadesPatrimonioHeroSlider;
