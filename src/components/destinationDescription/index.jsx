import React from 'react';
import './styles.css';

const DestinationDescription = ({ data }) => {

  const getList = () => (
    data?.descriptionBottom?.map((item, index) => (
      <li key={index} className="destination-description-desc-text-desc-li">
        {item?.text}
      </li>
    ))
  );

  return (
    <section className="destination-description-ctn revealTop">
      <div className="destination-description-desc-ctn">
        <h3 className="destination-description-desc-text-title">{data?.titleBottom}</h3>
        <ol className="destination-description-desc-text-desc">
          {getList()}
        </ol>
      </div>
      <div className="destination-description-desc-ctn destination-description-desc-ctn-map">
        <iframe
          src={data?.urlMap}
          title={data?.id}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
};

export default DestinationDescription;
