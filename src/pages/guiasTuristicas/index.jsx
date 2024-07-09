import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/guiasTuristicas/es/index.json';
import experiencesEn from '../../assets/data/guiasTuristicas/en/index.json';
import experiencesFr from '../../assets/data/guiasTuristicas/fr/index.json';
import experiencesDe from '../../assets/data/guiasTuristicas/de/index.json';
import experiencesPt from '../../assets/data/guiasTuristicas/pt/index.json';
import experiencesIt from '../../assets/data/guiasTuristicas/it/index.json';
import experiencesJp from '../../assets/data/guiasTuristicas/jp/index.json';
import experiencesCn from '../../assets/data/guiasTuristicas/cn/index.json';
import GuiasTuristicasBanner from '../../components/guiasTuristicasBanner';
import GuiasTuristicasContent from '../../components/guiasTuristicasContent';
import HomeSuscribe from '../../components/homeSuscribe';
import './styles.css';

const GuiasTuristicas = () => {
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
      <GuiasTuristicasBanner data={language} />
      <LazyLoadComponent>
        <GuiasTuristicasContent data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default GuiasTuristicas;
