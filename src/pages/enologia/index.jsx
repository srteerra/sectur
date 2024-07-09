import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import enologiaEs from '../../assets/data/enologia/es/index.json';
import enologiaDe from '../../assets/data/enologia/de/index.json';
import enologiaFr from '../../assets/data/enologia/fr/index.json';
import enologiaEn from '../../assets/data/enologia/en/index.json';
import enologiaIt from '../../assets/data/enologia/it/index.json';
import enologiaPt from '../../assets/data/enologia/pt/index.json';
import enologiaJp from '../../assets/data/enologia/jp/index.json';
import enologiaCn from '../../assets/data/enologia/cn/index.json';
import './styles.css';
import EnologiaBento from '../../components/enologiaBento';
import EnologiaTurismo from '../../components/enologiaTurismo';
import EnologiaInfo from '../../components/enologiaInfo';
import EnologiaDestinos from '../../components/enologiaDestinos';
import EnologiaBanner from '../../components/enologiaBanner';
import EnologiaProduccion from '../../components/enologiaProduccion';
import EnologiaArticulos from '../../components/enologiaArticulos';
import EnologiaDescarga from '../../components/enologiaDescarga';
import CintaRoja from '../../components/cintaRoja';

const Enologia = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(enologiaEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(enologiaEs)
        : isLanguage === 'DE' ? setLanguage(enologiaDe)
        : isLanguage === 'FR' ? setLanguage(enologiaFr)
        : isLanguage === 'EN' ? setLanguage(enologiaEn)
        : isLanguage === 'IT' ? setLanguage(enologiaIt)
        : isLanguage === 'PT' ? setLanguage(enologiaPt)
        : isLanguage === 'JP' ? setLanguage(enologiaJp)
        : isLanguage === 'CN' ? setLanguage(enologiaCn)
            : setLanguage(enologiaEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
            <EnologiaBento data={language} />
            <EnologiaTurismo data={language} />
            <EnologiaInfo data={language} />
            <EnologiaDestinos data={language} />
            <EnologiaBanner data={language} />
            <EnologiaProduccion data={language} />
            <CintaRoja data={language} />
            <EnologiaArticulos data={language} />
            <CintaRoja data={language} />
            <EnologiaDescarga data={language} />
        </div>
    );
};

export default Enologia;
