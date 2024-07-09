import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeTheMostViewed = ({ data }) => {
  const listMostViewed = data?.listMostViewed;

  const sections = () => (
    listMostViewed?.sections?.map((item, index) => (
      <div className={`home-the-most-viewed-ctn-sections-card-${index}`} key={item?.name}>
        <Link to={item?.dir}>
          <LazyLoadImage 
            src={require(`../../assets/img/header/${item?.image}`)}
            alt={item?.name}
            className="home-the-most-viewed-sections-card-img"
          />
          <div className="home-the-most-viewed-ctn-sections-card-hover">
            <p className="home-the-most-viewed-sections-card-hover-title">{item?.name}</p>
          </div>
        </Link>
      </div>
    ))
  );

  return (
    <div className="home-the-most-viewed-ctn">
      <h3 className="home-the-most-viewed-title">{listMostViewed?.title}</h3>
      <div className="home-the-most-viewed-ctn-sections">
        {sections()}
      </div>
    </div>
  );
};

export default HomeTheMostViewed;