import React from 'react';
import './styles.css';

const VideosBottom = ({ data }) => {
  return (
    <div className="videos-bottom-ctn">
			<div className="videos-bottom-ctn-video">
				<iframe
					width="100%"
					height="100%"
					src={data?.videoBottomVideoUrl}
					title={data?.titleBottom}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading='lazy'
					className="videos-gellery-gallery-right-item"
					key={data?.titleBottom}
				/>
			</div>
			<div className="videos-bottom-ctn-title">
				<h5 className="videos-bottom-title">{data?.titleBottom}</h5>
				<p className="videos-bottom-description">{data?.descriptionBottom}</p>
			</div>
		</div>
  );
};

export default VideosBottom;