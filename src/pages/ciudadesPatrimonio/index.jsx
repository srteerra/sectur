import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import ciudadesPatrimonioEs from '../../assets/data/ciudadesPatrimonio/es/index.json';
import ciudadesPatrimonioDe from '../../assets/data/ciudadesPatrimonio/de/index.json';
import ciudadesPatrimonioFr from '../../assets/data/ciudadesPatrimonio/fr/index.json';
import ciudadesPatrimonioEn from '../../assets/data/ciudadesPatrimonio/en/index.json';
import ciudadesPatrimonioIt from '../../assets/data/ciudadesPatrimonio/it/index.json';
import ciudadesPatrimonioPt from '../../assets/data/ciudadesPatrimonio/pt/index.json';
import ciudadesPatrimonioJp from '../../assets/data/ciudadesPatrimonio/jp/index.json';
import ciudadesPatrimonioCn from '../../assets/data/ciudadesPatrimonio/cn/index.json';
import './styles.css';
import CiuadesPatrimonioHeroSlider from '../../components/ciudadesPatrimonioHeroSlider';
import CiudadesPatrimonioHeader from '../../components/ciudadesPatrimonioHeader';
import CiudadesPatrimonioGaleria from '../../components/ciudadesPatrimonioGaleria';
import CiudadesPatrimonioInfo from '../../components/ciudadesPatrimonioInfo';
import CintaRoja from '../../components/cintaRoja';
import CiudadesPatrimonioCarousel from '../../components/ciudadesPatrimonioCarrusel';


const CiudadesPatrimonio = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(ciudadesPatrimonioEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(ciudadesPatrimonioEs)
            : isLanguage === 'DE' ? setLanguage(ciudadesPatrimonioDe)
            : isLanguage === 'FR' ? setLanguage(ciudadesPatrimonioFr)
            : isLanguage === 'EN' ? setLanguage(ciudadesPatrimonioEn)
            : isLanguage === 'IT' ? setLanguage(ciudadesPatrimonioIt)
            : isLanguage === 'PT' ? setLanguage(ciudadesPatrimonioPt)
            : isLanguage === 'JP' ? setLanguage(ciudadesPatrimonioJp)
            : isLanguage === 'CN' ? setLanguage(ciudadesPatrimonioCn)
            : setLanguage(ciudadesPatrimonioEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
            <CiuadesPatrimonioHeroSlider data={language.heroSlide} />
            <LazyLoadComponent>
                <CiudadesPatrimonioHeader data={language} />
                <CiudadesPatrimonioGaleria data={language.galeria} />
                <CiudadesPatrimonioInfo data={language} />
                <CintaRoja data={language} />
                <CiudadesPatrimonioCarousel data={language.carousels} />
            </LazyLoadComponent>
        </div>
    );
};

export default CiudadesPatrimonio;
