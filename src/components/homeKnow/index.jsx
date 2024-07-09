import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowSize from '../../utils/useWindowSize';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';
import { Link } from "react-router-dom";


const HomeKnow = ({ data }) => {
  const listKnow = data?.listKnow;
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

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
    if (isMobile) return setChangeSlideCount(5);
    if (isTablet) return setChangeSlideCount(4);
    if (isDesktop) return setChangeSlideCount(3);
  }, [isMobile, isTablet, isDesktop]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }

    setTouchStartX(null);
  };

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const deltaX = e.movementX;
      if (deltaX > 50) {
        prevSlide();
      } else if (deltaX < -50) {
        nextSlide();
      }
    }
  };

  return (
    <div className="home-know-ctn">
      <div className="home-know-ctn-title">
        <h1 className="home-know-title">{data.homeBienvenido}</h1>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.homeBienvenidoText}</p>
          </div>
        </div>
      </div>

      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data.homeDescubre}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.homeDescubreText}</p>
          </div>
        </div>
      </div>

      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data.homeSumergete}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.homeSumergeteText}</p>
          </div>
        </div>
      </div>

      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data.homeAventuras}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.homeAventurasText}</p>
          </div>
        </div>
      </div>

      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data.homePlanifica}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.homePlanificaText}</p>
          </div>
        </div>
      </div>

      <div className="home-know-ctn-title">
        <h2 className="home-know-title">{data?.titleListKnow}</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data?.subtitleListKnow}</p>
          </div>
        </div>
      </div>
      <div className="home-know-ctn-cards"
        
      >
        {listKnow?.map(item => (
          <Link to={item?.dir} className="home-know-ctn-card" style={{ transform: `translate(${slideCount}00%)` }}>
            <LazyLoadImage
              src={require(`../../assets/img/header/${item?.image}`)}
              alt={item?.title}
              className="home-know-card-img"
            />
            <div className="home-know-ctn-card-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})` }}>
              <p className="home-know-card-description-title">{item?.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-know-ctn-buttons">
        <button className="home-know-buttons" onClick={prevSlide} >
          <img className="home-know-buttons-img" src={Left} alt="Flecha izquierda" />
        </button>
        <button className="home-know-buttons" onClick={nextSlide} >
          <img className="home-know-buttons-img" src={Right} alt="Flecha derecha" />
        </button>
      </div>
    </div>
  );
};

export default HomeKnow;
