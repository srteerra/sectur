import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const DiaMuertosBanner = ({ data }) => {
  return (
    <section>
      <div className="dm-images-ctn-hero">
        <div className="dm-images-ctn-hero-description">
          <h1 className="dm-images-title">{data.title}</h1>
        </div>
      </div>

      <LazyLoadImage
        src={require(`../../assets/img/diaMuertos/Fondo amarillo 5.png`)}
        alt=""
        className="dm-franja"
      />
    </section>
  );
};

export default DiaMuertosBanner;
