import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExperienceContent from '../experienceContent';
import './styles.css';

const ExperienceAventureHero = ({ data }) => {
  return (
    <section className="experience-aventure-hero-images-ctn">
      <div className="experience-aventure-hero-images-ctn-hero">
        <LazyLoadImage
          src={require(`../../assets/img/experiences/aventuraGallery/${data?.imageUrl}`)}
          alt={data?.gallery[0]?.title}
          className="experience-aventure-hero-images-img-experience-aventure-hero-hero"
        />
        <div className="experience-aventure-hero-images-ctn-hero-description">
          <h1 className="experience-aventure-hero-images-title">{data?.title}</h1>
          <ExperienceContent data={data} />
        </div>
      </div>
    </section>
  )
};

export default ExperienceAventureHero;
