import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const DestinationKnown = ({ data }) => {

  const getGallery = () => (
    data?.gallery?.map(item => (
      <div className="destination-known-ctn-gallery-img" key={item.name}>
        <LazyLoadImage 
          src={require(`../../assets/img/destinations/${item.urlImg}`)}
          alt={item.name}
          className="destination-known-gallery-img"
        />
      </div>
    ))
  );

  const getDescriptionTop = () => (
    data?.descriptionTop?.map((item, index) => (
      <p className="destination-known-description-text" key={index}>{item?.text} </p>
    ))
  );

  return (
    <section className="destination-known-ctn">
      <h2 className="destination-known-title">{data?.titleTop}</h2>
      <div className="destination-known-ctn-gallery">
        {getGallery()}
      </div>
      <div className="destination-known-ctn-content">
        <div className="destination-known-ctn-description">
          <h3 className="destination-known-description-subtitle">{data?.subtitleTop}</h3>
          {getDescriptionTop()}
          {/*<a
            href={data?.actions?.button?.dir}
            target="_blank"
            rel="noopener
            noreferrer"
            className="destination-known-description-btn"
          >
            {data?.actions?.button?.text}
          </a>*/}
        </div>
      </div>      
    </section>
  )
};

export default DestinationKnown;
