import React from 'react';
import './styles.css';

const DestinationSpotify = ({ data }) => (
  <section className="destination-spotify-ctn">
    <div className="destination-spotify-ctn-iframes">
      <div className="destination-spotify-ctn-iframe-spotify">
        <iframe
          src={data?.urlSpotify}
          title={data?.id}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default DestinationSpotify;