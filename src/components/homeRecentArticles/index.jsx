import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeRecentArticles = ({ data }) => {
  const listRecentArticles = data?.listRecentArticles;
  const articles = () => (
    listRecentArticles?.articles?.map(item => (
      <div className="home-recent-articles-ctn-card">
        <div className="home-recent-articles-ctn-card-image">
          <LazyLoadImage 
            src={require(`../../assets/img/blog/${item?.image}`)}
            alt={item?.title}
            className="home-recent-articles-card-image"
          />
        </div>
        <div className="home-recent-articles-ctn-card-info">
          <p className="home-recent-articles-card-info-title">{item?.title}</p>
         
        </div>
      </div>   
    ))
  );

  return (
    <div className="home-recent-articles-ctn">
      <div className="home-recent-articles-ctn-content">
        <h5 className="home-recent-articles-title">{listRecentArticles?.title}</h5>
        <div className="home-recent-articles-ctn-subtitle">
          <p className="home-recent-articles-subtitle">{listRecentArticles?.subtitle}</p>
          <Link 
            to={listRecentArticles?.button?.dir}
            className="home-recent-articles-subtitle-button"
          >
            {listRecentArticles?.button?.name}
          </Link>
        </div>
        <div className="home-recent-articles-ctn-cards">
          {articles()}
        </div>
      </div>
    </div>
  );
};

export default HomeRecentArticles;