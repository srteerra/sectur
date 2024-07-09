import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MiceProtagonista = ({ data }) => {
  return (
    <div className="container-protagonista">
      <div className="left-column">
        <h2>{data.subtitle}</h2>
        <p className="paragraph">
          <strong>{data.boldText}</strong> {data.paragraph}
        </p>
      </div>
      <div className="right-column">
        <LazyLoadImage
          src={require(`../../assets/img/${data.imageUrl}`)}
          alt="Imagen"
          className="lazy-loaded-image"
        />
      </div>
    </div>
  );
};

export default MiceProtagonista;
