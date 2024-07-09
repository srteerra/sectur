import React, { useState, useEffect } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const InternationalEventsSliderVideo = ({ data }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(0);
  const [slideCount, setSlideCount] = useState(Array.from({ length: data.videos.length }, () => 0));

  const nextSlide = (position, size) => {
    let limit = size<4? 1-changeSlideCount:-size+4-changeSlideCount;
    if (slideCount[position] >= limit) {
      let newArr = [...slideCount];
      newArr[position] =  newArr[position]-1; 
      setSlideCount(newArr);
    }
  };

  const prevSlide = (position) => {
    if (slideCount[position] !== 0) {
      let newArr = [...slideCount];
      newArr[position] = newArr[position]+1;
      setSlideCount(newArr);
    }
  };

  useEffect(() => {
    if (isMobile) return setChangeSlideCount(3);
    if (isTablet) return setChangeSlideCount(1);
    if (isDesktop) return setChangeSlideCount(0);
  }, [isMobile, isTablet, isDesktop]);

  return (
    data?.videos?.map(car => (
      
    <section className="international-events-slider-video-ctn">
      <h2 className="international-events-slider-video-title">{car?.titleSlider}</h2>

      <div className="international-events-slider-video-ctn-cards">
        {car?.slider?.map(item => (
          <div className="international-events-slider-video-ctn-card" style={{transform: `translate(${slideCount[car.index]}00%)`}}>
            <iframe
              width="100%"
              height="100%"
              src={item?.urlVideo}
              title={item?.description}
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading='lazy'  
            />
            <p class="international-events-slider-video-ctn-card-titulo">{car?.description}</p>
          </div>
        ))}
      </div>

      <div className="international-events-slider-video-ctn-buttons">
        <button className="international-events-slider-video-buttons" onClick={() => prevSlide(car.index)} >
            <img className="international-events-slider-video-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button className="international-events-slider-video-buttons" onClick={() => nextSlide(car.index, car?.slider?.length)} >
          <img className="international-events-slider-video-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
    </section>
    ))
  )
};

export default InternationalEventsSliderVideo;
