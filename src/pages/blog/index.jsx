import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import experiencesEs from '../../assets/data/blog/es/index.json';
import experiencesEn from '../../assets/data/blog/en/index.json';
import experiencesFr from '../../assets/data/blog/fr/index.json';
import experiencesDe from '../../assets/data/blog/de/index.json';
import experiencesPt from '../../assets/data/blog/pt/index.json';
import experiencesIt from '../../assets/data/blog/it/index.json';
import experiencesJp from '../../assets/data/blog/jp/index.json';
import experiencesCn from '../../assets/data/blog/cn/index.json';
import BlogBanner from '../../components/blogBanner';
import BlogContent from '../../components/blogContent';
import HomeSuscribe from '../../components/homeSuscribe';
import './styles.css';

const Blog = () => {
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

  console.log('language: ', language);

  return (
    <div className="main-content">
      <BlogBanner data={language} />
      <LazyLoadComponent>
        <BlogContent data={language} />
      </LazyLoadComponent>
    </div>
  );
};

export default Blog;
