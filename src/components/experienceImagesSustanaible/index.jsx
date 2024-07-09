import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExperienceContentLink from '../experienceContentLink';
import './styles.css';

const ExperienceImagesSustanaible = ({ data }) => {
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  const secondData = {
    "actions": data.secondActions,
    "description": data.secondDescription
  };

  const getGallery = () => (
    data?.gallery?.map((item, index) => (
      <div className={`experience-images-sustanaible-ctn-img-experience-${index}`} key={index}>
        <a href={item?.dir} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
            alt={item?.title}
            className="experience-images-sustanaible-img-experience"
          />
          <div className="experience-images-sustanaible-ctn-img-experience-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
            <p className="experience-images-sustanaible-img-experience-description">{item?.title}</p>
          </div>
        </a>
      </div>
    ))
  );

  return (
    <section className="experience-images-sustanaible-ctn">
      <div className="experience-images-sustanaible-ctn-hero">
        <LazyLoadImage
          src={require(`../../assets/img/experiences/${data?.sostenibleImgHero}`)}
          alt={data?.gallery[0]?.title}
          className="experience-images-sustanaible-img-experience-hero"
        />
        <div className="experience-images-sustanaible-ctn-hero-description">
          <h1 className="experience-images-sustanaible-title">{data?.title}</h1>
          <ExperienceContentLink data={data} />
        </div>
      </div>
      {/*<div className="experience-images-sustanaible-ctn-hero">
        <div className="experience-images-sustanaible-ctn-hero-description">
          <h2 className="experience-images-sustanaible-title">{data?.secondTitle}</h2>
          <ExperienceContentLink data={secondData} />
        </div>
      </div>*/}
      <div className="experience-images-sustanaible-ctn-hero-description">
        <h2 className="experience-images-sustanaible-title">{data?.subtitle}</h2>
      </div>
      <div className="experience-images-sustanaible-ctn-img">
        {getGallery()}
      </div>
    </section>
  )
};

export default ExperienceImagesSustanaible;
