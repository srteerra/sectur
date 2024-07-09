import React, { useState, useEffect } from 'react';
import './styles.css';

const VideosTriTraveler = ({ data }) => {
	const [videoPrincipal, setVideoPrincipal] = useState(data?.tritravelerGellery[data?.tritravelerGellery.length - 1]);

	console.log('videoPrincipal: ', videoPrincipal);

	const videoList = () => (
		data?.tritravelerGellery?.map(item => (
			<div className="videos-tri-traveler-ctn-video" key={item?.name}>
				<button 
					type="button" 
					className="videos-tri-traveler-ctn-video-btn"
					onClick={() => setVideoPrincipal(item)}
				>
					<p className="videos-tri-traveler-description">{item?.title}</p>
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
					className="videos-tri-traveler-video"
				/>
			</div>
		))
	)

  return (
    <div className="videos-tri-traveler-ctn">
			<h5 className="videos-tri-traveler-title">{data?.titleTriTraveler}</h5>
			<p className="videos-tri-traveler-subtitle">{data?.subTitleTriTraveler}</p>
			<div className="videos-tri-traveler-ctn-videos">
				<div className="videos-tri-traveler-ctn-video-principal">
					<iframe
						width="100%"
						height="100%"
						src={videoPrincipal?.videoUrl}
						title={videoPrincipal?.title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						loading='lazy'
						className="videos-tri-traveler-video-principal"
					/>
					<p className="videos-tri-traveler-principal-description">{videoPrincipal?.title}</p>
				</div>
				<div className="videos-tri-traveler-ctn-video-list">
					{videoList()}
				</div>
			</div>
    </div>
  );
};

export default VideosTriTraveler;