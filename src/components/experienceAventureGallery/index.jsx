import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const ExperienceAventureGallery = ({ data }) => {
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  return (
    <section className="experience-aventure-gallery-ctn">
      <div className="experience-aventure-gallery-images-ctn">
        <div className="experience-aventure-gallery-ctn-image-left-top" >
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[0]?.imageUrl}`)}
            alt={data?.gallery[0]?.title}
            className="experience-aventure-gallery-image-left-top"
          />
          <a href={data?.gallery[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[0]?.title}</p>
          </a>
        </div>
        <div className="experience-aventure-gallery-ctn-image-left-bottom-left">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[1]?.imageUrl}`)}
            alt={data?.gallery[1]?.title}
            className="experience-aventure-gallery-image-left-bottom-left"
          />
          <a href={data?.gallery[1]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[1]?.title}</p>
          </a>
        </div>
        <div className="experience-aventure-gallery-ctn-image-left-bottom-right">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[2]?.imageUrl}`)}
            alt={data?.gallery[2]?.title}
            className="experience-aventure-gallery-image-left-bottom-right"
          />
          <a href={data?.gallery[2]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[2]?.title}</p>
          </a>
        </div>
        <div className="experience-aventure-gallery-ctn-image-center">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[3]?.imageUrl}`)}
            alt={data?.gallery[3]?.title}
            className="experience-aventure-gallery-image-center"
          />
          <a href={data?.gallery[3]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[3]?.title}</p>
          </a>
        </div>
        <div className="experience-aventure-gallery-ctn-image-right-top">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[4]?.imageUrl}`)}
            alt={data?.gallery[4]?.title}
            className="experience-aventure-gallery-image-right-top"
          />
          <a href={data?.gallery[4]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[4]?.title}</p>
          </a>
        </div>
        <div className="experience-aventure-gallery-ctn-image-right-bottom">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/aventuraGallery/${data?.gallery[5]?.imageUrl}`)}
            alt={data?.gallery[5]?.title}
            className="experience-aventure-gallery-image-right-bottom"
          />
          <a href={data?.gallery[5]?.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-gallery-image-ctn-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
            <p className="experience-aventure-gallery-image-description">{data?.gallery[5]?.title}</p>
          </a>
        </div>
      </div>
    </section>
  )
};

export default ExperienceAventureGallery;
