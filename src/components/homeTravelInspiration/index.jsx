import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeTravelInspiration = ({ data }) => {
  const listHomeTravelInspiration = data?.listHomeTravelInspiration;

  const travelsInspiration = () => (
    listHomeTravelInspiration?.destinations?.map(item => (
      <div className="home-travel-inspiration-ctn-card" key={item?.name}>
        <Link to={item?.dir}>
          <LazyLoadImage  
            src={require(`../../assets/img/header/${item?.image}`)}
            alt={item?.name}
            className="home-travel-inspiration-card-img"
          />
          <div className="home-travel-inspiration-ctn-card-hover">
            <p className="home-travel-inspiration-card-hover-title">{item?.title}</p>
          </div>
        </Link>
      </div>
    ))
  );

  return (
    <div className="home-travel-inspiration-ctn">
      <h5 className="home-travel-inspiration-title">{listHomeTravelInspiration?.title}</h5>
      <div className="home-travel-inspiration-ctn-cards">
        {travelsInspiration()}
      </div>
    </div>
  );
};

export default HomeTravelInspiration;