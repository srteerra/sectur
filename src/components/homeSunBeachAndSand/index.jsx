import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Parallax } from 'react-scroll-parallax';
import './styles.css';

const HomeSunBeachAndSand = ({ data }) => {
  const listSunBeachAndSand = data?.listSunBeachAndSand;

  const makeBold = (item, keyword) => {
    var re = new RegExp(keyword, 'g')
    return (
        item.replace(re, '<b>'+keyword+ '</b>')
    )
  };

  return (
    <div className="home-sun-beach-and-sand-ctn">
      <div className="home-sun-beach-and-sand-ctn-card">
        <div className="home-sun-beach-and-sand-ctn-card-img">
          <Parallax translateY={[-155, 100]}>
            <LazyLoadImage 
              src={require(`../../assets/img/header/${listSunBeachAndSand?.image}`)}
              alt={listSunBeachAndSand?.title}
              className="home-sun-beach-and-sand-card-img"
            />
          </Parallax>
        </div>
        <div className="home-sun-beach-and-sand-ctn-card-description">
          <h4 className="home-sun-beach-and-sand-card-description-title">{listSunBeachAndSand?.title}</h4>
          <p className="home-sun-beach-and-sand-card-description-subtitle">{listSunBeachAndSand?.subtitle}</p>
          <p className="home-sun-beach-and-sand-card-description-description" 
            dangerouslySetInnerHTML={{__html: 
             listSunBeachAndSand?.description
            }} 
          />
          <Link 
            to={listSunBeachAndSand?.button?.dir}
            className="home-sun-beach-and-sand-card-description-button"
          >
            {listSunBeachAndSand?.button?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSunBeachAndSand;