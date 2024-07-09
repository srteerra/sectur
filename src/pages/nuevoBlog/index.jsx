import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import blogEs from '../../assets/data/newBlog/es/index.json';
import blogEn from '../../assets/data/newBlog/en/index.json';
import blogFr from '../../assets/data/newBlog/fr/index.json';
import blogDe from '../../assets/data/newBlog/de/index.json';
import blogPt from '../../assets/data/newBlog/pt/index.json';
import blogIt from '../../assets/data/newBlog/it/index.json';
import blogJp from '../../assets/data/newBlog/jp/index.json';
import blogCn from '../../assets/data/newBlog/cn/index.json';

import './styles.css';
import BlogHeroSlider from '../../components/blogHeroSlider';
import NewBlogCat from '../../components/newBlogCat';
import NewBlogLastPost from '../../components/newBlogLastpost';

const NewBlog = () => {
    const { isLanguage } = useContext(Context);
    const [language, setLanguage] = useState(blogEs);

    window?.scroll({
        top: 0
    });

    useEffect(() => {
        isLanguage === 'ES' ? setLanguage(blogEs)
        : isLanguage === 'EN' ? setLanguage(blogEn)
        : isLanguage === 'FR' ? setLanguage(blogFr)
        : isLanguage === 'DE' ? setLanguage(blogDe)
        : isLanguage === 'PT' ? setLanguage(blogPt)
        : isLanguage === 'IT' ? setLanguage(blogIt)
        : isLanguage === 'JP' ? setLanguage(blogJp)
        : isLanguage === 'CN' ? setLanguage(blogCn)
            : setLanguage(blogEs)
    }, [isLanguage]);

    return (
        <div className="main-content">
            <BlogHeroSlider data={language.heroPost} />
            <LazyLoadComponent>
                <NewBlogCat data={language} />
                <NewBlogLastPost data={language.posts} label={language} />
            </LazyLoadComponent>
        </div>
    );
};

export default NewBlog;
