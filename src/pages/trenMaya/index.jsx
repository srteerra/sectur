import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesDe from '../../assets/data/trenMaya/de/index.json';
import experiencesEn from '../../assets/data/trenMaya/en/index.json';
import experiencesEs from '../../assets/data/trenMaya/es/index.json';
import experiencesFr from '../../assets/data/trenMaya/fr/index.json';
import experiencesIt from '../../assets/data/trenMaya/it/index.json';
import experiencesPt from '../../assets/data/trenMaya/pt/index.json';
import experiencesCn from '../../assets/data/trenMaya/cn/index.json';
import experiencesJp from '../../assets/data/trenMaya/jp/index.json';
import TrenMayaBanner from '../../components/trenMayaBanner';
import TrenMayaContent from '../../components/trenMayaContent';
import TrenMayaVideos from '../../components/trenMayaVideos';
import './styles.css';

const TrenMaya = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(experiencesEs);

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(experiencesEs)
    : isLanguage === 'DE' ? setLanguage(experiencesDe)
    : isLanguage === 'EN' ? setLanguage(experiencesEn)
    : isLanguage === 'FR' ? setLanguage(experiencesFr)
    : isLanguage === 'IT' ? setLanguage(experiencesIt)
    : isLanguage === 'PT' ? setLanguage(experiencesPt)
    : isLanguage === 'JP' ? setLanguage(experiencesJp)
    : isLanguage === 'CN' ? setLanguage(experiencesCn)
    : setLanguage(experiencesEs)
  }, [isLanguage]);

  return (
    <div className="main-content">
      <TrenMayaBanner data={language} />
      <LazyLoadComponent>
        <TrenMayaContent data={language} />
        <TrenMayaVideos data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default TrenMaya;
