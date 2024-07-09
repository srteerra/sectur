import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const ExperienceAventureTops = ({ data }) => {
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  const getTops = () => (
    data?.topsGallery?.map((item, index) => (
      <a href={item.dir} target="_blank" rel="noopener noreferrer" className="experience-aventure-tops-ctn-card" key={item.title}>
        <LazyLoadImage 
          src={require(`../../assets/img/experiences/aventuraGallery/${item.imageUrl}`)}
          alt={item.title}
          className="experience-aventure-tops-card-img"
        />
        <div className="experience-aventure-tops-ctn-card-description" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
          <p className="experience-aventure-tops-card-description" >{item.title}</p>
        </div>
        <div className="experience-aventure-tops-ctn-card-position">
          <div className="experience-aventure-tops-ctn-card-position-text">
            <p className="experience-aventure-tops-card-position-text">{index+1}</p>
          </div>
        </div>
      </a>
    ))
  );

  return (
    <section className="experience-aventure-tops-ctn">
      <h2 className="experience-aventure-tops-title">{data?.topsTitle}</h2>
      <div className="experience-aventure-tops-ctn-cards">
        {getTops()}
      </div>
    </section>
  )
};

export default ExperienceAventureTops;
