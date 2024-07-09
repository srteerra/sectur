import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/diaMuertos/es/index.json';
import experiencesEn from '../../assets/data/diaMuertos/en/index.json';
import experiencesFr from '../../assets/data/diaMuertos/fr/index.json';
import experiencesDe from '../../assets/data/diaMuertos/de/index.json';
import experiencesPt from '../../assets/data/diaMuertos/pt/index.json';
import experiencesIt from '../../assets/data/diaMuertos/it/index.json';
import experiencesJp from '../../assets/data/diaMuertos/jp/index.json';
import experiencesCn from '../../assets/data/diaMuertos/cn/index.json';
import DiaMuertosBanner from '../../components/diaMuertosBanner';
import DiaMuertosContent from '../../components/diaMuertosContent';
import InteractiveDayDead from '../../components/interactiveDayDead';
import MapIntersactive from '../../components/mapInteractive';
import HomeSuscribe from '../../components/homeSuscribe';
import './styles.css';

const DiaMuertos = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(experiencesEs);

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(experiencesEs)
    : isLanguage === 'EN' ? setLanguage(experiencesEn)
    : isLanguage === 'FR' ? setLanguage(experiencesFr)
    : isLanguage === 'DE' ? setLanguage(experiencesDe)
    : isLanguage === 'PT' ? setLanguage(experiencesPt)
    : isLanguage === 'IT' ? setLanguage(experiencesIt)
    : isLanguage === 'JP' ? setLanguage(experiencesJp)
    : isLanguage === 'CN' ? setLanguage(experiencesCn)
    : setLanguage(experiencesEs)
  }, [isLanguage]);

  return (
    <div className="main-content">
      <DiaMuertosBanner data={language} />
      <LazyLoadComponent>
        <DiaMuertosContent data={language} />
        <InteractiveDayDead data={language} />
        <MapIntersactive data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default DiaMuertos;
