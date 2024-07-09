import React, { useState } from 'react';
import './styles.css';

const InternationalEventsVideoFinder = ({ data }) => {
	const [videoPrincipal, setVideoPrincipal] = useState(data?.finderGellery[data?.finderGellery.length - 1]);

	const videoList = () => (
		data?.finderGellery?.map(item => (
			<div className="international-events-video-finder-ctn-video" key={item?.name}>
				<button 
					type="button" 
					className="international-events-video-finder-ctn-video-btn"
					onClick={() => setVideoPrincipal(item)}
				>
					<p className="international-events-video-finder-description">{item?.title}</p>
				</button>
				<iframe
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.name}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading='lazy'
					className="international-events-video-finder-video"
				/>
			</div>
		))
	)

  return (
    <div className="international-events-video-finder-ctn">
			<h5 className="international-events-video-finder-title">{data?.titleFinderGallery}</h5>
			<p className="international-events-video-finder-subtitle">{data?.subtitleFinderGallery}</p>
			<div className="international-events-video-finder-ctn-videos">
				<div className="international-events-video-finder-ctn-video-principal">
					<iframe
						width="100%"
						height="100%"
						src={videoPrincipal?.videoUrl}
						title={videoPrincipal?.title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						loading='lazy'
						className="international-events-video-finder-video-principal"
					/>
					<p className="international-events-video-finder-principal-description">{videoPrincipal?.title}</p>
				</div>
				<div className="international-events-video-finder-ctn-video-list">
					{videoList()}
				</div>
			</div>
    </div>
  );
};

export default InternationalEventsVideoFinder;