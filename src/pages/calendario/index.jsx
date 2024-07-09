import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/calendario/es/index.json';
import experiencesEn from '../../assets/data/calendario/en/index.json';
import experiencesFr from '../../assets/data/calendario/fr/index.json';
import experiencesDe from '../../assets/data/calendario/de/index.json';
import experiencesPt from '../../assets/data/calendario/pt/index.json';
import experiencesIt from '../../assets/data/calendario/it/index.json';
import experiencesJp from '../../assets/data/calendario/jp/index.json';
import experiencesCn from '../../assets/data/calendario/cn/index.json';
import CalendarioBanner from '../../components/calendarioBanner';
import CalendarioEventos from '../../components/calendarioEventos';
import CalendarioTime from '../../components/calendarioTime';
import HomeSuscribe from '../../components/homeSuscribe';
import './styles.css';

const Calendario = () => {
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
      <CalendarioBanner data={language} />
      <LazyLoadComponent>
        <CalendarioEventos data={language} />
        <CalendarioTime data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default Calendario;
