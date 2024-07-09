import React from 'react';
import './styles.css';

const MiceHeader = ({ data }) => {
    return (
      <div className="mice-header-ctn">
        <h1 className="mice-header-title">{data?.title}</h1>
      </div>
    );
  };
  
  export default MiceHeader;