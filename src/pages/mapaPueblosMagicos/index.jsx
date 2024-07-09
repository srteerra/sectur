import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import pueblosMagicosEs from '../../assets/data/pueblosMagicos/es/index.json';
import pueblosMagicosEn from '../../assets/data/pueblosMagicos/en/index.json';
import pueblosMagicosFr from '../../assets/data/pueblosMagicos/fr/index.json';
import pueblosMagicosDe from '../../assets/data/pueblosMagicos/de/index.json';
import pueblosMagicosPt from '../../assets/data/pueblosMagicos/pt/index.json';
import pueblosMagicosIt from '../../assets/data/pueblosMagicos/it/index.json';
import pueblosMagicosJp from '../../assets/data/pueblosMagicos/jp/index.json';
import pueblosMagicosCn from '../../assets/data/pueblosMagicos/cn/index.json';
import './styles.css';
import MapaPueblosMagicos from '../../components/mapaPueblosMagicos';
import MapaDescarga from '../../components/mapaPueblosMagicosDescarga';


const MapaPueblos = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(pueblosMagicosEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(pueblosMagicosEs)
        : isLanguage === 'EN' ? setLanguage(pueblosMagicosEn)
        : isLanguage === 'FR' ? setLanguage(pueblosMagicosFr)
        : isLanguage === 'DE' ? setLanguage(pueblosMagicosDe)
        : isLanguage === 'PT' ? setLanguage(pueblosMagicosPt)
        : isLanguage === 'IT' ? setLanguage(pueblosMagicosIt)
        : isLanguage === 'JP' ? setLanguage(pueblosMagicosJp)
        : isLanguage === 'CN' ? setLanguage(pueblosMagicosCn)
            : setLanguage(pueblosMagicosEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
           <MapaPueblosMagicos data={language.marcadores} dataLabels={language.staticItems}/> {/* Pasa solo los marcadores */}
           <MapaDescarga data={language}/> {/* Pasa solo los marcadores */}
            
        </div>
    );
};

export default MapaPueblos;
