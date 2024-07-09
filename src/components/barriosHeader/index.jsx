import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';



const BarriosHeader = ({ data }) => {
    return (
        <>
      <div className="barrios-header-ctn">
        <h1 className="barrios-header-title">{data?.title}</h1>
        
      </div>

      <div className="container-barrios-info">
            <div className="barrios-left-column">
                <LazyLoadImage
                    src={require(`../../assets/img/${data.imgLogo}`)}
                    alt="Imagen"
                    className="lazy-loaded-image lazy-loaded-image-header"
                />
            </div>
            <div className="barrios-right-column">
  
                <p className="barrios-paragraph">
                    {data.barriosParrafo1}
                </p>
                <p className="barrios-paragraph">
                    {data.barriosParrafo2}
                </p>
                
            </div>
        </div>      

      

      <div className='cinta-rosa'></div>
      </>
    );
  };
  
  export default BarriosHeader;