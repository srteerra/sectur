import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import destinationsEs from '../../assets/data/destinations/es/index.json';
import destinationsEn from '../../assets/data/destinations/en/index.json';
import destinationsFr from '../../assets/data/destinations/fr/index.json';
import destinationsDe from '../../assets/data/destinations/de/index.json';
import destinationsPt from '../../assets/data/destinations/pt/index.json';
import destinationsIt from '../../assets/data/destinations/it/index.json';
import destinationsJp from '../../assets/data/destinations/jp/index.json';
import destinationsCn from '../../assets/data/destinations/cn/index.json';
import DestinationVideo from '../../components/destinationVideo';
import DestinationKnown from '../../components/destinationKnow';
import DestinationSlider from '../../components/destinationSlider';
import DestinationDescription from '../../components/destinationDescription';
import DestinationSpotify from '../../components/destinationSpotify';
import DestinationVideo360 from '../../components/destinationVideo360';
import './styles.css';

const Destination = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(destinationsEs);
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = language?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  window?.scroll({
    top: 0
  });

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(destinationsEs)
    : isLanguage === 'EN' ? setLanguage(destinationsEn)
    : isLanguage === 'FR' ? setLanguage(destinationsFr)
    : isLanguage === 'DE' ? setLanguage(destinationsDe)
    : isLanguage === 'PT' ? setLanguage(destinationsPt)
    : isLanguage === 'IT' ? setLanguage(destinationsIt)
    : isLanguage === 'JP' ? setLanguage(destinationsJp)
    : isLanguage === 'CN' ? setLanguage(destinationsCn)
    : setLanguage(destinationsEs)
  }, [isLanguage]);

  return (
    <div className="main-content">
      <DestinationVideo data={data} />
      <LazyLoadComponent>
        <DestinationKnown data={data} />
        <DestinationSlider data={data} />
        <DestinationDescription data={data} />
        <DestinationSpotify data={data} />
        <DestinationVideo360 data={data} />
      </LazyLoadComponent>
    </div>
  )
};

export default Destination;
