import React from 'react';
import './styles.css';

const VideosTitle = ({ data }) => {
	const getVideos = () =>	(
		data?.videosTop?.map(item => (
			<div className="videos-title-ctn-video">
				<iframe
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.name}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading='lazy'
					className="videos-title-video"
				/>
				<p className="videos-title-video-description">{item?.name}</p>
			</div>
		))
	);

  return (
    <div className="videos-title-ctn">

			<h1 className="videos-title-title">{data.videoH1Title}</h1>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.videoP1}</p>
				</div>
        	</div>


			<h2 className="videos-title-title">{data.videoTitle2}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.videoP2}</p>
				</div>
        	</div>


			<h2 className="videos-title-title">{data.videoTitle3}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.videoP3}</p>
				</div>
        	</div>

			<h1 className="videos-title-title">{data?.title}</h1>
			<div className="videos-title-ctn-videos">
				{getVideos()}
			</div>


			<script type="application/ld+json">
				{`
				"@context": "https://schema.org",
				"@type": "WebPage",
				"url": "https://visitmexico.com/videos",
				"name": "Videos de México - VisitMexico",
				"description": "Explora la diversidad de México a través de nuestra colección de videos cuidadosamente seleccionados. Desde las playas vírgenes hasta las ciudades históricas, nuestros videos capturan la esencia y la belleza de este país vibrante y diverso.",
				"keywords": ["videos", "videos México"],
				"publisher": {
					"@type": "Organization",
					"name": "VisitMexico",
					"logo": {
					"@type": "ImageObject",
					"url": "https://visitmexico.com/logo.png",
					"width": 600,
					"height": 60
					}
				}
				`}
			</script>


    </div>
  );
};

export default VideosTitle;