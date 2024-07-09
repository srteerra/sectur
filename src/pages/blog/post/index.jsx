import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../../Context';

import postEs from '../../../assets/data/blog/es/index.json';
import postEn from '../../../assets/data/blog/en/index.json';
import postFr from '../../../assets/data/blog/fr/index.json';
import postDe from '../../../assets/data/blog/de/index.json';
import postPt from '../../../assets/data/blog/pt/index.json';
import postIt from '../../../assets/data/blog/it/index.json';
import postJp from '../../../assets/data/blog/jp/index.json';
import postCn from '../../../assets/data/blog/cn/index.json';
import './styles.css';

const Post = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(postEs);
  const location = useLocation();
  const postId = location?.pathname?.split('/')[3];
  const getPostInfo = language?.posts?.filter(post => post.id === postId);
  const data = getPostInfo[0]?.post;

  window?.scroll({
    top: 0
  });
  
  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(postEs)
    : isLanguage === 'EN' ? setLanguage(postEn)
    : isLanguage === 'FR' ? setLanguage(postFr)
    : isLanguage === 'DE' ? setLanguage(postDe)
    : isLanguage === 'PT' ? setLanguage(postPt)
    : isLanguage === 'IT' ? setLanguage(postIt)
    : isLanguage === 'JP' ? setLanguage(postJp)
    : isLanguage === 'CN' ? setLanguage(postCn)
    : setLanguage(postEs)
  }, [isLanguage]);

  const contentCase = (item) => {
    console.log('item: ', item);
    switch(item.type) {
      case 'title':
        return <h2 className="post-content-title">{item.content}</h2>
      case 'subtitle':
        return <h3 className="post-content-subtitle">{item.content}</h3>
      case 'text':
        return <p className="post-content-text">{item.content}</p>
      case 'image':
        return <figure className="post-content-ctn">
          <img className="post-content-img" src={require(`../../../assets/img/blog/post/${postId}/${item.urlImg}`)} alt={item.urlImg} />
        </figure>
      default: 
        return null;
    };
  };

  return (
    <div className="main-content">
      <div className="blog-banner">
        <img src={require(`../../../assets/img/${getPostInfo[0]?.urlImg}`)} alt="Banner post" />
        <div className="blog-banner-content">
          <h1>{getPostInfo[0]?.name}</h1>
        </div>
      </div>
      <div className='post-content'>
        {data?.map((item, index) => contentCase(item))}
      </div>
    </div>
  );
};

export default Post;
