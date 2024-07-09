import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowSize from '../../utils/useWindowSize';
import "./styles.css";
import Right from "../../assets/img/rss/arrow-right.svg";
import Left from "../../assets/img/rss/arrow-left.svg";

const CalendarioEventos = ({ data }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const nextSlide = () => {
    if (slideCount > -(data?.events.length - 1)) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  const colors = [
    "166, 32, 140, .5",
    "229, 38, 25, .5",
    "236, 6, 139, .5",
    "253, 167, 0, .5",
    "136, 194, 67, .5",
    "3, 160, 175, .5",
  ];

  useEffect(() => {
    if (isMobile) return setChangeSlideCount(4);
    if (isTablet) return setChangeSlideCount(3);
    if (isDesktop) return setChangeSlideCount(0);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className="calendar2-known-ctn">
      <div className="calendar-events">

      <h1 className="calendario-title titulo-calendario">{data.calTitle1}</h1>
      <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.calP1}</p>
          </div>
        </div>

      <h2 className="calendario-title titulo-calendario">{data.calTitle2}</h2>
      <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.calP2}</p>
          </div>
        </div>


      <h2 className="calendario-title titulo-calendario">{data.calTitle3}</h2>
      <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.calP3}</p>
          </div>
        </div>


      <h2 className="calendario-title titulo-calendario">{data.calTitle4}</h2>
      <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.calP4}</p>
          </div>
        </div>


      <h2 className="calendario-title titulo-calendario">{data.calTitle5}</h2>
      <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">{data.calP5}</p>
          </div>
        </div>


       
      </div>
     
     

     


    
    </div>
  );
};



export default CalendarioEventos;
