import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogHeroSlider = ({ data }) => {
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
              src={require(`../../assets/img/${slide.imgPost}`)}
              alt={`Barrios Mágicos ${index}`}
              className="hero-slide-image"
            />
            <div className="slide-overlay">
              <h1>{ slide.tituloPost }</h1>
              <Link className="ver-mas-button" 
            to={slide.urlPost} state={{postData: slide.post}}
          >
              {slide.readMoreButton}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogHeroSlider;
