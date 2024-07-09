import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const GuiasTuristicasBanner = ({ data }) => {
  return (
    <section >
      <div className="gt-images-ctn-hero">
      
        <div className="gt-images-ctn-hero-description">
          <h1 className="gt-images-title">{data.title}</h1>
        </div> 
      </div>
    
    

    
  </section>
  )
};

export default GuiasTuristicasBanner;
