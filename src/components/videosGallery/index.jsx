import React from 'react';
import './styles.css';

const VideosGallery = ({ data }) => {

	const getRightVideos = () => (
		data?.videosGallery?.map((item, index) => index !== 0 && (
			<div className="videos-gellery-gallery-ctn-right-item">
				<iframe
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading='lazy'
					className="videos-gellery-gallery-right-item"
					key={item?.title}
				/>
			</div>
		))
	);

  return (
    <div className="videos-gellery-ctn">
			<h5 className="videos-gellery-title">{data?.titleGallery}</h5>
			<p className="videos-gellery-subtitle">{data?.subtitleGallery}</p>
			<div className="videos-gellery-ctn-gallery-left">
				<div className="videos-gellery-ctn-gallery-left-item">
					<iframe
						width="100%"
						height="100%"
						src={data?.videosGallery[0]?.videoUrl}
						title={data?.videosGallery[0]?.title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						loading='lazy'
						className="videos-gellery-gallery-left-item"
					/>
				</div>
				<div className="videos-gellery-ctn-gallery-right-item">
					{getRightVideos()}
				</div>
			</div>
    </div>
  );
};

export default VideosGallery;