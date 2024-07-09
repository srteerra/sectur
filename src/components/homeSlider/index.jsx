import React, {useEffect,useState, useContext} from 'react';
import { Carousel } from 'react-carousel-minimal';
import { Context } from '../../Context';
import './styles.css';
import {infoEs} from '../../assets/data/homeSlider/es/index.js';
import {infoEn} from '../../assets/data/homeSlider/en/index.js';
import {infoFr} from '../../assets/data/homeSlider/fr/index.js';
import {infoDe} from '../../assets/data/homeSlider/de/index.js';
import {infoPt} from '../../assets/data/homeSlider/pt/index.js';
import {infoIt} from '../../assets/data/homeSlider/it/index.js';
import {infoJp} from '../../assets/data/homeSlider/jp/index.js';
import {infoCn} from '../../assets/data/homeSlider/cn/index.js';

const HomeSlider = ({ data }) => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(infoEs);

  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(infoEs)
   : isLanguage === 'EN' ? setLanguage(infoEn)
    : isLanguage === 'FR' ? setLanguage(infoFr)
    : isLanguage === 'DE' ? setLanguage(infoDe)
    : isLanguage === 'PT' ? setLanguage(infoPt)
    : isLanguage === 'IT' ? setLanguage(infoIt)
    : isLanguage === 'JP' ? setLanguage(infoJp)
    : isLanguage === 'CN' ? setLanguage(infoCn)
    : setLanguage(infoEs)
  }, [isLanguage]);


  var curpage = 1;
  var sliding = false;
  var click = true;
  var pagePrefix = "slide";
  var transitionPrefix = "circle";
  var svg = true;

  function leftSlide() {
    if (click) {
      if (curpage === 1) curpage = 5;
      console.log("woek");
      sliding = true;
      curpage--;
      svg = true;
      click = false;
      for (let k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.className += " tran";
      }
      setTimeout(() => {
        move();
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  function rightSlide() {
    if (click) {
      if (curpage === 4) curpage = 0;
      console.log("woek");
      sliding = true;
      curpage++;
      svg = false;
      click = false;
      for (let k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.className += " tran";
      }
      setTimeout(() => {
        move();
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  function move() {
    if (sliding) {
      sliding = false;
      if (svg) {
        for (let j = 1; j <= 9; j++) {
          let c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.setAttribute("class", transitionPrefix + j + " streak");
          console.log("streak");
        }
      } else {
        for (let j = 10; j <= 18; j++) {
          let c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.setAttribute("class", transitionPrefix + j + " streak");
          console.log("streak");
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= 4; i++) {
          if (i === curpage) {
            var a = document.getElementById(pagePrefix + i);
            a.className += " up1";
          } else {
            var b = document.getElementById(pagePrefix + i);
            b.classList.remove("up1");
          }
        }
        sliding = true;
      }, 600);
      setTimeout(() => {
        click = true;
      }, 1700);

      setTimeout(() => {
        if (svg) {
          for (let j = 1; j <= 9; j++) {
            let c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.setAttribute("class", transitionPrefix + j + " steap");
          }
        } else {
          for (let j = 10; j <= 18; j++) {
            let c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.setAttribute("class", transitionPrefix + j + " steap");
          }
          sliding = true;
        }
      }, 850);
      setTimeout(() => {
        click = true;
      }, 1700);
    }
  }


/*
 const info = [
    {
      image: require("../../assets/img/header/mexicoatravesdelosanos.webp"),
      caption: `<div>
                  MÉXICO A TRAVÉS DE LOS AÑOS
                <br/>
                Admíralo
              </div>`
    },
    {
      image: require("../../assets/img/header/piramide.webp"),
      caption: `<div>
                   Descubre los sitios arqueológicos
                  <br/>
                  que resguardan el pasado de México
                </div>`
    },
    {
      image: require("../../assets/img/header/dia-de-muertos (1).webp"),
      caption: `<div>
                    SE ACERCA DÍA DE MUERTOS
                  <br/>
                  La fecha mexicana más amada en el mundo
                </div>`
    },
    {
      image: require("../../assets/img/header/PUEBLOS-MAGICOS.webp"),
      caption: `<div>
                  NUEVOS PUEBLOS MÁGICOS
                <br/>
                Nombramientos 2023
              </div>`
    },
  ];*/

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  
  return (
    <div className="home-slider-ctn" style={{ textAlign: "center" }}>
        <div>
          {/*<div className="home-slider-ctn-headband">
            <p className="home-slider-headband-text">México es el 7° país más visitado del mundo en 2022 (Fuente: OMT).</p>
          </div>*/}
          <Carousel
            data={language}
            time={5000}
            width="100vw"
            height="100%"
            captionStyle={captionStyle}
            slideNumber={false}
            captionPosition="center"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "100%",
              margin: "0",
            }}
          />
        </div>
        <div className="slider-ctn-btn-video">
          <button type='button' className="slider-btn-video">VIDEO</button>
        </div>
        {/*<div className='parent'>
      <div className='slider'>
        <button type="button" id='right' className='right slider-btn-slide' name="button" onClick={rightSlide}>
          <svg version="1.1" id="Capa_1" width='40px' height='40px ' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 477.175 477.175" style={{ enableBackground: "new 0 0 477.175 477.175;" }} xmlSpace="preserve">
          <g>
            <path style={{ fill: "#9d9d9d;" }} d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
            "/>
          </g>
          </svg>
        </button>
        <button type="button" id='left' className='left slider-btn-slide' name="button" onClick={leftSlide}>
          <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 477.175 477.175" style={{ enableBackground: "new 0 0 477.175 477.175;" }} xmlSpace="preserve">
          <g>
            <path style={{ fill: "#9d9d9d;"}} d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
          </g>
          </svg>
        </button>
        <div className="slider-ctn-btn-video">
          <button type='button' className="slider-btn-video">VIDEO</button>
        </div>
        <svg id='svg2' className='up2' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle id='circle1' className='circle1 steap' cx="46.1vw" cy="62vh" r="20"  />
          <circle id='circle2' className='circle2 steap' cx="46.1vw" cy="62vh" r="100"  />
          <circle id='circle3' className='circle3 steap' cx="46.1vw" cy="62vh" r="180"  />
          <circle id='circle4' className='circle4 steap' cx="46.1vw" cy="62vh" r="260"  />
          <circle id='circle5' className='circle5 steap' cx="46.1vw" cy="62vh" r="340"  />
          <circle id='circle6' className='circle6 steap' cx="46.1vw" cy="62vh" r="420"  />
          <circle id='circle7' className='circle7 steap' cx="46.1vw" cy="62vh" r="500"  />
          <circle id='circle8' className='circle8 steap' cx="46.1vw" cy="62vh" r="580"  />
          <circle id='circle9' className='circle9 steap' cx="46.1vw" cy="62vh" r="660"  />
        </svg>
        <svg id='svg1' className='up2' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle id='circle10' className='circle10 steap' cx="56.1vw" cy="62vh" r="20"  />
          <circle id='circle11' className='circle11 steap' cx="56.1vw" cy="62vh" r="100"  />
          <circle id='circle12' className='circle12 steap' cx="56.1vw" cy="62vh" r="180"  />
          <circle id='circle13' className='circle13 steap' cx="56.1vw" cy="62vh" r="260"  />
          <circle id='circle14' className='circle14 steap' cx="56.1vw" cy="62vh" r="340"  />
          <circle id='circle15' className='circle15 steap' cx="56.1vw" cy="62vh" r="420"  />
          <circle id='circle16' className='circle16 steap' cx="56.1vw" cy="62vh" r="500"  />
          <circle id='circle17' className='circle17 steap' cx="56.1vw" cy="62vh" r="580"  />
          <circle id='circle18' className='circle18 steap' cx="56.1vw" cy="62vh" r="660"  />
        </svg>
        <div id='slide1' className='slide1 up1'>
          <p className="slide-text-p1">Bienvenido</p>
          <p className="slide-text-p2">Comienza una Nueva Aventura</p>
          <p className="slide-text-p3">México es el 7° país más visitado del mundo en 2022 (Fuente: OMT)</p>
        </div>
        <div id='slide2' className='slide2'>
          <p className="slide-text-p1">Bienvenido</p>
          <p className="slide-text-p2">Comienza una Nueva Aventura</p>
          <p className="slide-text-p3">México es el 7° país más visitado del mundo en 2022 (Fuente: OMT)</p>
        </div>
        <div id='slide3' className='slide3'>
          <p className="slide-text-p1">Bienvenido</p>
          <p className="slide-text-p2">Comienza una Nueva Aventura</p>
          <p className="slide-text-p3">México es el 7° país más visitado del mundo en 2022 (Fuente: OMT)</p>
        </div>
        <div id='slide4' className='slide4'>
          <p className="slide-text-p1">Bienvenido</p>
          <p className="slide-text-p2">Comienza una Nueva Aventura</p>
          <p className="slide-text-p3">México es el 7° país más visitado del mundo en 2022 (Fuente: OMT)</p>
        </div>
      </div>
    </div>*/}
    </div>
  );
};

export default HomeSlider;