import React from 'react';
import './styles.css';

const CiudadesPatrimonioHeader = ({ data }) => {
    return (
        <>
      <div className="barrios-header-ctn">
        <h1 className="barrios-header-title">{data?.title}</h1>
        <p>{data?.barriosParrafo1}</p>
        <p>{data?.barriosParrafo2}</p>
      </div>
      
      </>
    );
  };
  
  export default CiudadesPatrimonioHeader;