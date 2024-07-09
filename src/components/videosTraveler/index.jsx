import React from 'react';
import './styles.css';

const VideosTraveler = ({ data }) => {
	const getGallery = () => (
		data?.travelsGallery?.map(item => (
			<div className="videos-traveler-ctn-travel" key={item?.name}>
				<iframe 
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen 
					className="videos-traveler-travel"
				/>
				<p className="videos-traveler-description">{item?.title}</p>
			</div>
		))
		
	);

  return (
    <div className="videos-traveler-ctn">
			<div className="videos-traveler-ctn-travelers">
				<h4 className="videos-traveler-title">{data?.titleTravels}</h4>
				<p className="videos-traveler-subtitle">{data?.subTitleTravels}</p>
				<div className="videos-traveler-ctn-travels">
					{getGallery()}
				</div>
			</div>
    </div>
  );
};

export default VideosTraveler;