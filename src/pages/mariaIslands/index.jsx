import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import mariaIslandsEs from '../../assets/data/mariaIslands/es/index.json';
import mariaIslandsEn from '../../assets/data/mariaIslands/en/index.json';
import mariaIslandsFr from '../../assets/data/mariaIslands/fr/index.json';
import mariaIslandsDe from '../../assets/data/mariaIslands/de/index.json';
import mariaIslandsPt from '../../assets/data/mariaIslands/pt/index.json';
import mariaIslandsIt from '../../assets/data/mariaIslands/it/index.json';
import mariaIslandsJp from '../../assets/data/mariaIslands/jp/index.json';
import mariaIslandsCn from '../../assets/data/mariaIslands/cn/index.json';
import MariaIslandsVideo from '../../components/islandsMariaVideo';
// import MariaIslandsSlider from '../../components/mariaIslandsSlider';
import MariaIslandsDescription from '../../components/mariaIslandsDescription';
import MariaIslandsGallery from '../../components/mariaIslandsGallery';
import './styles.css';

const MariaIslands = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(mariaIslandsEs);

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(mariaIslandsEs)
    : isLanguage === 'EN' ? setLanguage(mariaIslandsEn)
    : isLanguage === 'FR' ? setLanguage(mariaIslandsFr)
    : isLanguage === 'DE' ? setLanguage(mariaIslandsDe)
    : isLanguage === 'PT' ? setLanguage(mariaIslandsPt)
    : isLanguage === 'IT' ? setLanguage(mariaIslandsIt)
    : isLanguage === 'JP' ? setLanguage(mariaIslandsJp)
    : isLanguage === 'CN' ? setLanguage(mariaIslandsCn)
    : setLanguage(mariaIslandsEs)
  }, [isLanguage]);
  console.log('language: ', language)
  return (
    <div className="main-content">
      {/*<MariaIslandsSlider data={language} />*/}
      <MariaIslandsVideo data={language}/>
      <LazyLoadComponent>
        <MariaIslandsDescription data={language} />
        <MariaIslandsGallery data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default MariaIslands;