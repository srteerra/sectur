import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/eventosInternacionales/es/index.json';
import experiencesEn from '../../assets/data/eventosInternacionales/en/index.json';
import experiencesFr from '../../assets/data/eventosInternacionales/fr/index.json';
import experiencesDe from '../../assets/data/eventosInternacionales/de/index.json';
import experiencesPt from '../../assets/data/eventosInternacionales/pt/index.json';
import experiencesIt from '../../assets/data/eventosInternacionales/it/index.json';
import experiencesJp from '../../assets/data/eventosInternacionales/jp/index.json';
import experiencesCn from '../../assets/data/eventosInternacionales/cn/index.json';
import InternationalEventsVideo from '../../components/internationalEventsVideo';
import InternationalEventsHeader from '../../components/internationalEventsHeader';
import ExperienceCards from '../../components/experienceCards';
import InternationalEventsSliderVideo from '../../components/internationalEventsSliderVideo';
import InternationalEventsCarouselVideo from '../../components/internationalEventsCarouselVideo';
import InternationalEventsVideoFinder from '../../components/internationalEventsVideoFinder';
import InternationalEventsExplore from '../../components/internationalEventsExplore';
import InternationalEventsVideoGallery from '../../components/internationalEventsVideoGallery';

import HomeSuscribe from '../../components/homeSuscribe';
import './styles.css';

const InternationalEvents = () => {
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
      <InternationalEventsVideo data={language} />
      <LazyLoadComponent>
        <InternationalEventsHeader data={language} />
        
        <InternationalEventsSliderVideo data={language} />
        {/* none */}
        {/*<InternationalEventsCarouselVideo data={language} />*/}
        {/*<InternationalEventsVideoFinder data={language} />*/}
        {/*<InternationalEventsExplore data={language} />*/}
        {/*<InternationalEventsVideoGallery data={language} />*/}
      </LazyLoadComponent>
    </div>
  );
};

export default InternationalEvents;
