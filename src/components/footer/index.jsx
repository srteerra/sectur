import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from '../../assets/img/header/logo.png';
import Tiktok from '../../assets/img/rss/tiktok.svg';
import Facebook from '../../assets/img/rss/facebook.svg';
import Instagram from '../../assets/img/rss/instagram.svg';
import './styles.css';

import footerEs from '../../assets/data/footer/es/index.json';
import footerEn from '../../assets/data/footer/en/index.json';
import footerFr from '../../assets/data/footer/fr/index.json';
import footerDe from '../../assets/data/footer/de/index.json';
import footerPt from '../../assets/data/footer/pt/index.json';
import footerIt from '../../assets/data/footer/it/index.json';
import footerJp from '../../assets/data/footer/jp/index.json';
import footerCn from '../../assets/data/footer/cn/index.json';

const Footer = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(footerEs);

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(footerEs)
    : isLanguage === 'EN' ? setLanguage(footerEn)
    : isLanguage === 'FR' ? setLanguage(footerFr)
    : isLanguage === 'DE' ? setLanguage(footerDe)
    : isLanguage === 'PT' ? setLanguage(footerPt)
    : isLanguage === 'IT' ? setLanguage(footerIt)
    : isLanguage === 'JP' ? setLanguage(footerJp)
    : isLanguage === 'CN' ? setLanguage(footerCn)
    : setLanguage(footerEs)
  }, [isLanguage]);

  const linksFast = () => (
    language?.linksFast?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksKnow = () => (
    language?.linksKnow?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksContact = () => (
    language?.linksContact?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const sections = () => (
    <>
      <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{language?.linksFast?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksFast()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{language?.linksKnow?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksKnow()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{language?.linksContact?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksContact()}
          </ul>
        </div>
    </>
  );

  return (
    <div className="footer-ctn">
      <div className="footer-ctn-contact">
        <div className="footer-ctn-contact-section">
          <Link to={'/'}>
            <LazyLoadImage 
              src={Logo}
              alt='visitmexico'
              className="footer-contact-logo"
            />
          </Link>
          <p className="footer-contact-section-text">{language?.description}</p>
          <div>
            <p className="footer-contact-section-title">{language?.followUs}</p>
            <div>
              <a href="https://www.tiktok.com/@visitmexico_oficial/"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Tiktok} alt="tiktok" />
              </a>
              <a href="https://www.facebook.com/VisitMexicoES"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/visitmexico/"  target="_blank" rel="noopener noreferrer">
                <img className="footer-contact-rss" src={Instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        {sections()}
      </div>
      <div className="footer-ctn-contact-legal">
        <div className="footer-ctn-contact-legal-links">
          <Link className="footer-contact-legal-link" to="/">
            {language?.legalWarning}
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            {language?.privacyPolicy}
          </Link>
        </div>
        <div className="footer-ctn-contact-legal-links">
          <p className="footer-contact-legal-link">{language?.register}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;