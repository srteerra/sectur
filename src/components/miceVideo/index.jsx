import React from 'react';
import './styles.css';

const MiceVideo = ({ data }) => {
  return (
    <section className="mice-video-top-ctn">
      <iframe
        width="100%"
        height="100%"
        src={data?.urlVideoTop}
        title={data?.id}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading='lazy'  
      />
    </section>
  )
};

export default MiceVideo;