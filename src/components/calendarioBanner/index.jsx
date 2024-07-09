import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const CalendarioBanner = ({ data }) => {
  return (
    <section >
    <div className="calendario2-images-ctn-hero">

      <div className="calendario2-images-ctn-hero-description">
        <h1 className="calendario2-images-title">{data.title}</h1>
       </div>
    </div>
    <LazyLoadImage
          src={require(`../../assets/img/header/liston-azul.webp`)}
          alt=""
          className="calendario2-franja-banner"
        />
  </section>
  )
};

export default CalendarioBanner;
