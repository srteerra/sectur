import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExperienceContentLink from '../experienceContentLink';
import './styles.css';

const ExperienceImagesWellness = ({ data }) => {
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
      <div className={`experience-images-wellness-ctn-img-experience-${index}`} key={index}>
        <a href={item?.dir} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
            alt={item?.title}
            className="experience-images-wellness-img-experience"
          />
          <div className="experience-images-wellness-ctn-img-experience-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
            <p className="experience-images-wellness-img-experience-description">{item?.title}</p>
          </div>
        </a>
      </div>
    ))
  )

  return (
    <section className="experience-images-wellness-ctn">
      <div className="experience-images-wellness-ctn-hero">
      <LazyLoadImage
          src={require(`../../assets/img/experiences/${data?.gallery[0]?.imageUrl}`)}
          alt={data?.gallery[0]?.title}
          className="experience-images-wellness-img-experience-hero"
        />
        <div className="experience-images-wellness-ctn-hero-description">
          <h1 className="experience-images-wellness-title">{data?.title}</h1>
          <ExperienceContentLink data={data} />
        </div>
      </div>
      <div className="experience-images-wellness-ctn-hero-description">
        <h2 className="experience-images-wellness-title">{data?.subtitle}</h2>
      </div>
      <div className="experience-images-wellness-ctn-img">
        {getGallery()}
      </div>
    </section>
  )
};

export default ExperienceImagesWellness;
