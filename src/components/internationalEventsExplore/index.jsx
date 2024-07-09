import React from 'react';
import './styles.css';

const InternationalEventsExplore = ({ data }) => {
	const getGallery = () => (
		data?.exploreGallery?.map(item => (
			<div className="international-events-explore-ctn-travel" key={item?.title}>
				<iframe 
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen 
					className="international-events-explore-travel"
				/>
				<p className="international-events-explore-description">{item?.title}</p>
			</div>
		))
	);

  return (
    <div className="international-events-explore-ctn">
			<div className="international-events-explore-ctn-travelers">
				<h4 className="international-events-explore-title">{data?.exploreTitle}</h4>
				<p className="international-events-explore-subtitle">{data?.exploreSubTitle}</p>
				<div className="international-events-explore-ctn-travels">
					{getGallery()}
				</div>
			</div>
    </div>
  );
};

export default InternationalEventsExplore;