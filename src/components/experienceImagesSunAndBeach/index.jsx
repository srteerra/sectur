import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowSize from '../../utils/useWindowSize';
import ExperienceContentLink from '../experienceContentLink';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const ExperienceImagesSunAndBeach = ({ data }) => {
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(0);

  const [slideCount, setSlideCount] = useState(0);

  const nextSlide = () => {
    if (slideCount >= -changeSlideCount) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  useEffect(() => {
    if (isMobile) return setChangeSlideCount(9);
    if (isTablet) return setChangeSlideCount(7);
    if (isDesktop) return setChangeSlideCount(5);
  }, [isMobile, isTablet, isDesktop]);

  const getGallery = () => (
    data?.subGallery?.map((item, index) => (
      <div className={`experience-images-sun-and-beach-ctn-img-experience-${index}`} key={index}>
        <a href={item?.dir} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
            alt={item?.title}
            className="experience-images-sun-and-beach-img-experience"
          />
          <div className="experience-images-sun-and-beach-ctn-img-experience-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
            <p className="experience-images-sun-and-beach-img-experience-description">{item?.title}</p>
          </div>
        </a>
      </div>
    ))
  );

  return (
    <section className="experience-images-sun-and-beach-ctn">
      <div className="experience-images-sun-and-beach-ctn-hero">
        <LazyLoadImage
          src={require(`../../assets/img/experiences/${data?.gallery[0]?.imageUrl}`)}
          alt={data?.gallery[0]?.title}
          className="experience-images-sun-and-beach-img-experience-hero"
        />
        <div className="experience-images-sun-and-beach-ctn-hero-description">
          <h1 className="experience-images-sun-and-beach-title">{data?.title}</h1>
          <ExperienceContentLink data={data} />
        </div>
      </div>
      <div className="experience-images-sun-and-beach-ctn-hero-description">
        <h2 className="experience-images-sun-and-beach-title">{data?.subtitle}</h2>
      </div>
      <div>
        <div className="experience-images-sun-and-beach-ctn-cards">
          {data?.gallery?.map((item, index) => (
            <div className="experience-images-sun-and-beach-card" style={{transform: `translate(${slideCount}00%)`}}>
              <LazyLoadImage
                src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
                alt={item?.title}
                className="experience-images-sun-and-beach-card-img"
              />
              <div className="experience-images-sun-and-beach-ctn-card-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}} >
                <a href={item?.dir} target="_blank" rel="noopener noreferrer" className="experience-images-sun-and-beach-ctn-card-description-link">
                  <p className="experience-images-sun-and-beach-card-description-title">{item?.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="experience-images-sun-and-beach-ctn-buttons">
          <button className="experience-images-sun-and-beach-buttons" onClick={() => prevSlide()} >
              <img className="experience-images-sun-and-beach-buttons-img" src={Left} alt="arrow right" />
          </button>
          <button className="experience-images-sun-and-beach-buttons" onClick={() => nextSlide()} >
            <img className="experience-images-sun-and-beach-buttons-img" src={Right} alt="arrow right" />
          </button>
        </div>
      </div>
    </section>
  )
};

export default ExperienceImagesSunAndBeach;
