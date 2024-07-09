import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import useWindowSize from '../../utils/useWindowSize';
import './styles.css';

const HomeSliderVideoCards = ({ data }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const widthSize = () => {
    if (isMobile) return 300;
    if (isTablet) return 600;
    if (isDesktop) return 970;
  };

  const heightSize = () => {
    if (isMobile) return 220;
    if (isTablet) return 340;
    if (isDesktop) return 520;
  };

  const slides = [];
  data?.homeSlides?.map(item => {
    slides.push({
      "key": item?.key,
      "content": <iframe width={`${widthSize()}`} height={`${heightSize()}`} src={`${item?.content}?rel=0`} title={item?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    })
  });
  
  return (
    <div className="home-slider-video-cards-ctn">
      <Carousel slides={slides} showNavigation={true}/>
    </div>
  );
};

export default HomeSliderVideoCards;