import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MariaIslandsDescription = ({ data }) => {

  const getDescription = () => (
    data?.description?.map((item, index) => (
      <p className="maria-islands-description-content-text" key={index}>{item?.text}</p>
    ))
  )

  return (
    <div className="maria-islands-description-ctn">
			<div className="maria-islands-description-content-ctn">
        <div className="maria-islands-description-content-ctn-text">
          <h1 className="maria-islands-description-content-title">{data?.title}</h1>
          {getDescription()}
        </div>
        <div className="maria-islands-description-content-ctn-img">
         
          {/*<LazyLoadImage 
            src={require(`../../assets/img/mariaIslands/${data.urlImg}`)}
            alt={data.title}
            className="maria-islands-description-image"
          />*/}
           
          <iframe
            src={data?.urlVideo}
            title={data?.title}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading='lazy'
            className='videoIslasMarias'
          />
 
        </div>
      </div>
    </div>
  );
};

export default MariaIslandsDescription;
