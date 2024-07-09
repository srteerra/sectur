import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import winesEs from '../../assets/data/wines/es/index.json';
import winesEn from '../../assets/data/wines/en/index.json';
import winesFr from '../../assets/data/wines/fr/index.json';
import winesDe from '../../assets/data/wines/de/index.json';
import winesPt from '../../assets/data/wines/pt/index.json';
import winesIt from '../../assets/data/wines/it/index.json';
import winesJp from '../../assets/data/wines/jp/index.json';
import winesCn from '../../assets/data/wines/cn/index.json';
import WinesSlider from '../../components/winesSlider';
import WinesDescription from '../../components/winesDescription';
import WinesCards from '../../components/winesCards';
import './styles.css';

const Wines = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(winesEs);

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(winesEs)
    : isLanguage === 'EN' ? setLanguage(winesEn)
    : isLanguage === 'FR' ? setLanguage(winesFr)
    : isLanguage === 'DE' ? setLanguage(winesDe)
    : isLanguage === 'PT' ? setLanguage(winesPt)
    : isLanguage === 'IT' ? setLanguage(winesIt)
    : isLanguage === 'JP' ? setLanguage(winesJp)
    : isLanguage === 'CN' ? setLanguage(winesCn)
    : setLanguage(winesEs)
  }, [isLanguage]);

  return (
    <div className="main-content">
      <WinesSlider data={language} />
      <LazyLoadComponent>
        <WinesDescription data={language} />
        <WinesCards data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default Wines;