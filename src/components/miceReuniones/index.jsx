import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MiceReuniones = ({ data }) => {
    return (
        <div className="mice-reuniones-container">
            <h2>{data.reunionesTitle}</h2>
            <div className="row">
                <div className="column reuniones-columna-izquierda">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem1}`)}
                        alt="Imagen"
                        className="lazy-loaded-image-mice" // Agrega la clase CSS si es necesario
                    />
                </div>
                <div className="column">
                    <h3>{data.reunionesItem1Title}</h3>
                    <p>
  {data.reunionesItem1Parrafo1} <span style={{ fontWeight: 'bold', color: '#A6218C' }}> <a  style={{ color: '#A6218C' }} href="https://www.datatur.sectur.gob.mx/SitePages/RankingOMT.aspx">{data.reunionesBoldText}</a> </span> {data.reunionesAfterBoldText}
</p>

                    <p>{data.reunionesItem1Parrafo2}</p>
                    <p>{data.reunionesItem1Parrafo3}</p>
                </div>
            </div>
            <div className="row">
                <div className="column reuniones-columna-izquierda">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem2}`)}
                        alt="Imagen"
                        className="lazy-loaded-image-mice" // Agrega la clase CSS si es necesario
                    />
                </div>
                <div className="column">
                    <h3>{data.reunionesItem2Title}</h3>
                    <p>{data.reunionesItem2Parrafo1}</p>
                    <p>{data.reunionesItem2Parrafo2}</p>
                    <p>{data.reunionesItem2Parrafo3}</p>
                </div>
            </div>
            <div className="row">
                <div className="column reuniones-columna-izquierda">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem3}`)}
                        alt="Imagen"
                        className="lazy-loaded-image-mice" // Agrega la clase CSS si es necesario
                    />
                </div>
                <div className="column">
                    <h3>{data.reunionesItem3Title}</h3>
                    <p>{data.reunionesItem3Parrafo1}</p>
                    <p>{data.reunionesItem3Parrafo2}</p>
                    <p>{data.reunionesItem3Parrafo3}</p>
                </div>
            </div>
            <div className="row">
                <div className="column reuniones-columna-izquierda">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem4}`)}
                        alt="Imagen"
                        className="lazy-loaded-image-mice" // Agrega la clase CSS si es necesario
                    />
                </div>
                <div className="column">
                    <h3>{data.reunionesItem4Title}</h3>
                    <p>{data.reunionesItem4Parrafo1}</p>
                    <p>{data.reunionesItem4Parrafo2}</p>
                    <p>{data.reunionesItem4Parrafo3}</p>
                </div>
            </div>
            <div className="row">
                <div className="column reuniones-columna-izquierda">
                    <LazyLoadImage
                        src={require(`../../assets/img/${data.imgItem5}`)}
                        alt="Imagen"
                        className="lazy-loaded-image-mice" // Agrega la clase CSS si es necesario
                    />
                </div>
                <div className="column">
                    <h3>{data.reunionesItem5Title}</h3>
                    <p>{data.reunionesItem5Parrafo1}</p>
                    <p>{data.reunionesItem5Parrafo2}</p>
                    <p>{data.reunionesItem5Parrafo3}</p>
                </div>
            </div>
            {/* Agrega más filas aquí si es necesario */}
        </div>
    );
};

export default MiceReuniones;
