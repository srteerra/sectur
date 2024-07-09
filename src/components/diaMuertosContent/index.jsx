import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const DiaMuertosContent = ({ data }) => {
  return (
    <div className="calendar2-known-ctn">
      <div className="calendario2-eventos">
        <h2 className="destination-known-title">{data.titleTop}</h2>
        <div className="calendare-known-subtitle">
          <p >{data.text}</p>
        </div>
       
      </div>
      <br/>
      <div className="muertos-content">
        <div className="muertos-row">
          <div className="muertos-imagen1">
            <LazyLoadImage
              src={require(`../../assets/img/diaMuertos/2.webp`)}
              alt=""
              className="imagen"
            />
          </div>
          <div className="muertos-imagen2">
            <LazyLoadImage
              src={require(`../../assets/img/diaMuertos/1.webp`)}
              alt=""
              className="imagen"
            />
          </div>
          <div className="muertos-imagen3">
            <LazyLoadImage
              src={require(`../../assets/img/diaMuertos/3.webp`)}
              alt=""
              className="imagen"
            />
          </div>
          <div className="muertos-imagen4">
            <LazyLoadImage
              src={require(`../../assets/img/diaMuertos/4.webp`)}
              alt=""
              className="imagen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaMuertosContent;
