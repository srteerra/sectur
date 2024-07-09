import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import magicTownsEs from '../../assets/data/magicTowns/es/index.json';
import magicTownsEn from '../../assets/data/magicTowns/en/index.json';
import magicTownsFr from '../../assets/data/magicTowns/fr/index.json';
import magicTownsDe from '../../assets/data/magicTowns/de/index.json';
import magicTownsPt from '../../assets/data/magicTowns/pt/index.json';
import magicTownsIt from '../../assets/data/magicTowns/it/index.json';
import magicTownsJp from '../../assets/data/magicTowns/jp/index.json';
import magicTownsCn from '../../assets/data/magicTowns/cn/index.json';
import MagicTownsVideo from '../../components/magicTownsVideo';
import MagicTownsDescription from '../../components/magicTownsDescription';
import MagicTownsSlider from '../../components/magicTownsSlider';
import MagicTownsKnow from '../../components/magicTownsKnow';
import MagicTownsVideoSlider from '../../components/magicTownsVideoSlider';
import './styles.css';

const MagicTowns = () => {
	const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(magicTownsEs);

  window?.scroll({
    top: 0
  });

	useEffect(() => {
    isLanguage === 'ES' ? setLanguage(magicTownsEs)
    : isLanguage === 'EN' ? setLanguage(magicTownsEn)
    : isLanguage === 'FR' ? setLanguage(magicTownsFr)
    : isLanguage === 'DE' ? setLanguage(magicTownsDe)
    : isLanguage === 'PT' ? setLanguage(magicTownsPt)
    : isLanguage === 'IT' ? setLanguage(magicTownsIt)
    : isLanguage === 'JP' ? setLanguage(magicTownsJp)
    : isLanguage === 'CN' ? setLanguage(magicTownsCn)
    : setLanguage(magicTownsEs)
  }, [isLanguage]);

  return (
    <div className="main-content">
      <MagicTownsVideo data={language} />
			<LazyLoadComponent>
				<MagicTownsDescription data={language} />
				<MagicTownsSlider data={language} />
				<MagicTownsKnow data={language} />
				<MagicTownsVideoSlider data={language} />
			</LazyLoadComponent>
    </div>
  );
};

export default MagicTowns;