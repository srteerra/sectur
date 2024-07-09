import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import videosEs from '../../assets/data/videos/es/index.json';
import videosEn from '../../assets/data/videos/en/index.json';
import videosFr from '../../assets/data/videos/fr/index.json';
import videosDe from '../../assets/data/videos/de/index.json';
import videosPt from '../../assets/data/videos/pt/index.json';
import videosIt from '../../assets/data/videos/it/index.json';
import videosJp from '../../assets/data/videos/jp/index.json';
import videosCn from '../../assets/data/videos/cn/index.json';
import VideosVideo from '../../components/videosVideo';
import VideosTitle from '../../components/videosTitle';
import VideosSlider from '../../components/videosSlider';
import VideosSliderGallery from '../../components/videosSliderGallery';
import VideosTraveler from '../../components/videosTraveler';
import VideosTriTraveler from '../../components/videosTriTraveler';
import VideosGallery from '../../components/videosGallery';
import VideosBottom from '../../components/videosBottom';
import './styles.css';
import VideosSlider2 from '../../components/videosSlider2';

const Videos = () => {
	const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(videosEs);
  // const location = useLocation();
  // const stateId = location?.pathname?.split('/')[2];
  // const getStateInfo = language?.experiences?.filter(video => video.id === videoId);
  // const data = getStateInfo?.[0];

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(videosEs)
    : isLanguage === 'EN' ? setLanguage(videosEn)
    : isLanguage === 'FR' ? setLanguage(videosFr)
    : isLanguage === 'DE' ? setLanguage(videosDe)
    : isLanguage === 'PT' ? setLanguage(videosPt)
    : isLanguage === 'IT' ? setLanguage(videosIt)
    : isLanguage === 'JP' ? setLanguage(videosJp)
    : isLanguage === 'CN' ? setLanguage(videosCn)
    : setLanguage(videosEs)
  }, [isLanguage]);
  return (
    <div className="main-content">
			<VideosVideo data={language} />
			<LazyLoadComponent>
				<VideosTitle data={language} />
				<VideosSlider data={language} />
				<VideosSliderGallery data={language} />
				<VideosTraveler data={language} />
				<VideosSlider2 data={language} />
				<VideosGallery data={language} />
				<VideosBottom data={language} />
			</LazyLoadComponent>
    </div>
  );
};

export default Videos;
