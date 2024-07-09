import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MariaIslandsGallery = ({ data }) => {
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  const getGallery = () => (
    data?.gallery?.map((item, index) => (
      <div className={`maria-islands-gallery-content-ctn-img-${index}`}>
        <a href={item?.dir} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage 
            src={require(`../../assets/img/mariaIslands/${item.urlImg}`)}
            alt={data.title}
            className="maria-islands-gallery-image"
          />
          <div className="maria-islands-gallery-ctn-img-experience-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
            <p className="maria-islands-gallery-img-experience-description">{item?.name}</p>
          </div>
        </a>
      </div>
    ))
  );

  return (
    <div className="maria-islands-gallery-ctn">
      <div className="maria-islands-gallery-ctn-title">
        <h2 className="maria-islands-gallery-title">{data?.subtitle}</h2>
      </div>
			<div className="maria-islands-gallery-content-ctn">
        {getGallery()}
      </div>
    </div>
  );
};

export default MariaIslandsGallery;
