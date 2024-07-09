import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import useWindowSize from '../../utils/useWindowSize';
import './styles.css';

const VideosSlider = ({ data }) => {
	const { isMobile, isTablet, isDesktop } = useWindowSize();

	const widthSize = () => {
		if (isMobile) return 300;
		if (isTablet) return 600;
		if (isDesktop) return 970;
	  };
	
	  const heightSize = () => {
		if (isMobile) return 220;
		if (isTablet) return 340;
		if (isDesktop) return 720;
	  };

	const getSlides = () => {
		const arraySlides = [];
		for (let i = 0; i < data?.slides?.length; i++) {
			arraySlides.push(
				{
					key: data?.slides[i]?.title,
					content: 
						<div className="videos-slider-ctn-carousel-item-video">
							<iframe 
								className="videos-slider-ctn-carousel-item"
								width={`${widthSize()}`}
								height={`${heightSize()}`}
								src={data?.slides[i]?.videoUrl}
								title={data?.slides[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="video-slider-description">{data?.slides[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};

  return (
    <div className="videos-slider-ctn">
		<h2 className="videos-slider-title">{data?.titleSlider}</h2>
		<div className="videos-slider-ctn-carousel">
			<Carousel slides={getSlides()} showNavigation={true}/>
		</div>
    </div>
  );
};

export default VideosSlider;