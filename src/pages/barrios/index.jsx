import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import barriosEs from '../../assets/data/barrios/es/index.json';
import barriosDe from '../../assets/data/barrios/de/index.json';
import barriosFr from '../../assets/data/barrios/fr/index.json';
import barriosEn from '../../assets/data/barrios/en/index.json';
import barriosIt from '../../assets/data/barrios/it/index.json';
import barriosPt from '../../assets/data/barrios/pt/index.json';
import barriosJp from '../../assets/data/barrios/jp/index.json';
import barriosCn from '../../assets/data/barrios/cn/index.json';
import BarriosVideo from '../../components/barriosVideo';
import BarriosHeader from '../../components/barriosHeader';
import './styles.css';
import BarriosCarousel from '../../components/barriosCarousel';
import BarriosHeroSlider from '../../components/barriosHeroSlider';

const Barrios = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(barriosEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(barriosEs)
            : isLanguage === 'DE' ? setLanguage(barriosDe)
            : isLanguage === 'FR' ? setLanguage(barriosFr)
            : isLanguage === 'EN' ? setLanguage(barriosEn)
            : isLanguage === 'IT' ? setLanguage(barriosIt)
            : isLanguage === 'PT' ? setLanguage(barriosPt)
            : isLanguage === 'JP' ? setLanguage(barriosJp)
            : isLanguage === 'CN' ? setLanguage(barriosCn)
            : setLanguage(barriosEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
            <BarriosHeroSlider data={language.heroSlide} />
            <LazyLoadComponent>
                <BarriosHeader data={language} />
                <BarriosCarousel data={language.carousels} />
            </LazyLoadComponent>
        </div>
    );
};

export default Barrios;
