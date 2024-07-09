import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import MiceVideo from '../../components/miceVideo';
import miceEs from '../../assets/data/mice/es/index.json';
import miceDe from '../../assets/data/mice/de/index.json';
import miceFr from '../../assets/data/mice/fr/index.json';
import miceEn from '../../assets/data/mice/en/index.json';
import miceIt from '../../assets/data/mice/it/index.json';
import miceCn from '../../assets/data/mice/cn/index.json';
import miceJp from '../../assets/data/mice/jp/index.json';
import micePt from '../../assets/data/mice/pt/index.json';
import MiceHeader from '../../components/miceHeader';
import MiceProtagonista from '../../components/miceProtagonista';
import MiceSlideText from '../../components/miceSlideText';
import './styles.css';
import MiceReuniones from '../../components/miceReuniones';
import MiceClasificacion from '../../components/miceClasificacion';
import MiceMexico from '../../components/miceMexico';
import MiceCollage from '../../components/miceCollage';

const Mice = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(miceEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(miceEs)
            : isLanguage === 'DE' ? setLanguage(miceDe)
            : isLanguage === 'FR' ? setLanguage(miceFr)
            : isLanguage === 'EN' ? setLanguage(miceEn)
            : isLanguage === 'IT' ? setLanguage(miceIt)
            : isLanguage === 'CN' ? setLanguage(miceCn)
            : isLanguage === 'JP' ? setLanguage(miceJp)
            : isLanguage === 'PT' ? setLanguage(micePt)
            : setLanguage(miceEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
            <MiceVideo data={language} />
            <LazyLoadComponent>
                <MiceHeader data={language} />
                <MiceProtagonista data={language} />
                <MiceSlideText slides={language.slides} /> {/* Pasa los textos del slide como una propiedad */}
                <MiceReuniones data={language} />
                <MiceClasificacion data={language} />
                <MiceMexico data={language} />
                <MiceCollage data={language} />
            </LazyLoadComponent>
        </div>
    );
};

export default Mice;
