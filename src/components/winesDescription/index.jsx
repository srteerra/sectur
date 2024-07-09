import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const WinesDescription = ({ data }) => {

  const getDescription = () => (
    data?.description?.map((item, index) => (
      <p className="wines-description-content-text" key={index}>{item?.text}</p>
    ))
  )

  return (
    <div className="wines-description-ctn">
			<div className="wines-description-content-ctn">
        <div className="wines-description-content-ctn-text">
          <h1 className="wines-description-content-title">{data?.title}</h1>
          {getDescription()}
        </div>
        <div className="wines-description-content-ctn-img">
          <LazyLoadImage 
            src={require(`../../assets/img/wines/${data.urlImg}`)}
            alt={data.title}
            className="wines-description-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WinesDescription;
