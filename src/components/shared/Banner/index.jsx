import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const Banner = ({  img }) => {
  return (
    <section >
      <div className="post-banner">
      <LazyLoadImage 
            src={require(`../../../assets/img/${img}`)}
            className="home-recent-articles-card-image"
          />
        
      </div>

    </section>
  );
};

export default Banner;
