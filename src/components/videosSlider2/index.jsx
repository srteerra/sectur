import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import useWindowSize from '../../utils/useWindowSize';
import './styles.css';

const VideosSlider2 = ({ data }) => {
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
		for (let i = 0; i < data?.tritravelerGellery?.length; i++) {
			arraySlides.push(
				{
					key: data?.tritravelerGellery[i]?.title,
					content: 
						<div className="videos-slider-ctn-carousel-item-video">
							<iframe 
								className="videos-slider-ctn-carousel-item"
								width={`${widthSize()}`}
								height={`${heightSize()}`}
								src={data?.tritravelerGellery[i]?.videoUrl}
								title={data?.tritravelerGellery[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="video-slider-description">{data?.tritravelerGellery[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};

  return (
    <div className="videos-slider-ctn">
		<h2 className="videos-slider-title">{data?.titleTriTraveler}</h2>
		<div className="videos-slider-ctn-carousel">
			<Carousel slides={getSlides()} showNavigation={true}/>
		</div>
    </div>
  );
};

export default VideosSlider2;