import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeExperience360 = () => {
  const listExperience = {
    title: "Vive la experiencia 360",
    subtitle: "Siente como si estuvieras ahí y convéncete del mejor destino para visitar.",
    experiences: [
      {
        name: "Lugares mágicos que te sorprenderán",
        image: "DF_Bellas_artes_04.webp",
        button: {
          name: "Ver",
          dir: "/"
        }
      },
      {
        name: "Costas que conquistarán tus sentidos",
        image: "NAY_RinconDeGuayabitos_Playas_0529.webp",
        button: {
          name: "Ver",
          dir: "/"
        }
      },
      {
        name: "Un vistazo a paisajes coloniales llenos de tradición",
        image: "GTO_guanajuato_338.webp",
        button: {
          name: "Ver",
          dir: "/"
        }
      },
      {
        name: "Los espacios naturales que cautivarán tu corazón",
        image: "CAM_calakmul53.webp",
        button: {
          name: "Ver",
          dir: "/"
        }
      }
    ]
  };

  const experiences = () => (
    listExperience?.experiences?.map(item => (
      <div className="home-experience-360-ctn-card">
        <LazyLoadImage
          src={require(`../../assets/img/header/${item?.image}`)}
          alt={item?.name}
          className="home-experience-360-card-img"
        />
        <div className="home-experience-360-ctn-card-title">
          <div>
            <p className="home-experience-360-card-title">{item?.name}</p>
            <Link className="home-experience-360-card-button" to={item?.button?.dir}>
              {item?.button?.name}
            </Link>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className="home-experience-360-ctn">
      <h5 className="home-experience-360-title">{listExperience?.title}</h5>
      <p className="home-experience-360-subtitle">{listExperience?.subtitle}</p>
      <div className="home-experience-360-ctn-cards">
        {experiences()}
      </div>
    </div>
  );
};

export default HomeExperience360;