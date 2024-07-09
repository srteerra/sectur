import React, { useState, useEffect, useContext } from 'react';
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
import DestinationsStates from '../../components/destinationsStates';
import './styles.css';

const Destinations = () => {
	const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(destinationsEs);

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
      <DestinationVideo data={language} />
		<LazyLoadComponent>	
			<DestinationsStates data={language} />
		</LazyLoadComponent>
    </div>
  );
};

export default Destinations;
