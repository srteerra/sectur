import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import { Context } from '../../Context';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';
import {infoEs} from '../../assets/data/homeSlider/es/index.js';
import {infoEn} from '../../assets/data/homeSlider/en/index.js';
import {infoFr} from '../../assets/data/homeSlider/fr/index.js';
import {infoDe} from '../../assets/data/homeSlider/de/index.js';
import {infoPt} from '../../assets/data/homeSlider/pt/index.js';
import {infoIt} from '../../assets/data/homeSlider/it/index.js';
import {infoJp} from '../../assets/data/homeSlider/jp/index.js';
import {infoCn} from '../../assets/data/homeSlider/cn/index.js';
import VideoModal from '../VideoModal/index.jsx';

const Carousel = ({ data }) => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(infoEs);
  const carouselList = language;
  const [slideCount, setSlideCount] = useState(0);
  const [stopCarousel, setStopCarousel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('');
  
  const nextSlide = () => {
    if (slideCount >= - (carouselList?.length - 2)) {
      setSlideCount(slideCount - 1);
      setStopCarousel(true);
    }
    if (slideCount === - (carouselList?.length - 1)) {
      setSlideCount(0);
      setStopCarousel(true);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
      setStopCarousel(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideCount >= - (carouselList?.length - 2)) {
        !stopCarousel && setSlideCount(slideCount - 1);
      }
      if (slideCount === - (carouselList?.length - 1)) {
        !stopCarousel && setSlideCount(0);
      };
    }, 5000);
    return () => clearTimeout(timer);
  }, [carouselList, slideCount, stopCarousel]);

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(infoEs)
   : isLanguage === 'EN' ? setLanguage(infoEn)
    : isLanguage === 'FR' ? setLanguage(infoFr)
    : isLanguage === 'DE' ? setLanguage(infoDe)
    : isLanguage === 'PT' ? setLanguage(infoPt)
    : isLanguage === 'IT' ? setLanguage(infoIt)
    : isLanguage === 'JP' ? setLanguage(infoJp)
    : isLanguage === 'CN' ? setLanguage(infoCn)
    : setLanguage(infoEs)
  }, [isLanguage]);

  const openModal = (videoUrl) => {
    setModalVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideoUrl('');
    setIsModalOpen(false);
  };

  const getUrlType = (url, title, itemType) => {
    const setUrlType = (url.includes('http') || url.includes('https')) ? 'url' : 'dir';

    if (itemType === 'video') {
      return (
        <button onClick={() => openModal(url)} className="carousel-btn">
          {title}
        </button>
      );
    }

    if (setUrlType === 'dir') {
      return (
        <Link className="carousel-btn" to={url} >
          {title}
        </Link>
      );
    };

    return (
      <a className="carousel-btn" href={url} target='_blank' rel='noreferrer'>
        {title}
      </a>
    );
  };

  const carouselListItems = () => (
    carouselList?.map((item) => (
      <div className="carousel-content-item-ctn" key={item.title} style={{transform: `translate(${slideCount}00%)`}}>
        <LazyLoadImage
          src={require(`../../assets/img/header/${item.image}`)}
          alt={carouselList?.title}
          className="carousel-img"
        />
        <div className="carousel-content-info-ctn">
          <div className="carousel-content-info-data-ctn">
            <div>
              {item.description.map((description) => (
                <p className="carousel-content-info-data-text" key={description.text}>
                  {description.text}
                </p>
              ))}
              {getUrlType(item.url, item.urlTitle, item.itemType)}
            </div>
          </div>
          
        </div>
      </div>
    ))
  );

  return (
    <div className='carousel-ctn'>
      <div className="carousel-content-ctn">
        <button className="carousel-buttons-left" onClick={prevSlide} >
          <img className="carousel-buttons-img" src={Left} alt="arrow left" />
        </button>
        {carouselListItems()}
        <button className="carousel-buttons-right" onClick={nextSlide} >
          <img className="carousel-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
      <VideoModal isOpen={isModalOpen} onRequestClose={closeModal} videoUrl={modalVideoUrl} />
    </div>
  );
};

export default Carousel;
