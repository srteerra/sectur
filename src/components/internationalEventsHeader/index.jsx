import React from 'react';
import './styles.css';

const InternationalEventsHeader = ({ data }) => {
  return (
    <div className="international-events-header-ctn">
      <h1 className="international-events-header-title">{data?.title}</h1>
    <div className="international-events-header-content">
      <iframe width="100%" height="600" src={data?.iframe} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className='international-events-header-content-texto'>
          {data?.texto}
        </p>
        <p className='international-events-header-content-texto'>
          {data?.texto2}
        </p>
        <p className='international-events-header-content-texto'>
          {data?.texto3}
        </p>
    </div>
    </div>
  );
};

export default InternationalEventsHeader;