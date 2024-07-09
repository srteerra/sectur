import React from 'react';
import './styles.css';

const InternationalEventsVideoGallery = ({ data }) => {
  return (
    <section className="international-events-video-gallery-ctn">
      <h5 className="international-events-video-gallery-title">{data?.galleryTitle}</h5>
      <div className="international-events-video-gallery-ctn-video">
        {data?.videoGallery?.map((item, index) => (
          <iframe
            key={index}
            width="100%"
            height="100%"
            src={item?.videoUrl}
            title={item?.title}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading='lazy' 
            className={`international-events-video-gallery-video-${index}`}
          />
        ))}
      </div>
    </section>
  )
};

export default InternationalEventsVideoGallery;
