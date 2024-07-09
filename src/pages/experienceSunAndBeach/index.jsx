import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/experiences/es/index.json';
import experiencesEn from '../../assets/data/experiences/en/index.json';
import experiencesFr from '../../assets/data/experiences/fr/index.json';
import experiencesDe from '../../assets/data/experiences/de/index.json';
import experiencesPt from '../../assets/data/experiences/pt/index.json';
import experiencesIt from '../../assets/data/experiences/it/index.json';
import experiencesJp from '../../assets/data/experiences/jp/index.json';
import experiencesCn from '../../assets/data/experiences/cn/index.json';
import ExperienceVideo from '../../components/experienceVideo';
import ExperienceImagesSunAndBeach from '../../components/experienceImagesSunAndBeach';
import ExperienceCards from '../../components/experienceCards';
import './styles.css';

const ExperienceSunAndBeach = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(experiencesEs);
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = language?.experiences?.filter(experience => experience.id === stateId);
  const data = getStateInfo?.[0];

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
      <ExperienceVideo data={data} />
      <LazyLoadComponent>
        <ExperienceImagesSunAndBeach data={data} />
        
      </LazyLoadComponent>
    </div>
  );
};

export default ExperienceSunAndBeach;
