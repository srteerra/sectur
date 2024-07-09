import React from 'react';
import './styles.css';

const DestinationVideo360 = ({ data }) => (
  <section className="state-video-360-ctn">
    <iframe
      width="100%"
      height="100%"
      src={data?.urlVideoBottom}
      title={data?.id}
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading='lazy'  
    />
  </section>
);

export default DestinationVideo360;
