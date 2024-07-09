import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import useWindowSize from '../../utils/useWindowSize';
import './styles.css';

const VideosSliderGallery = ({ data }) => {
	const { isMobile, isTablet, isDesktop } = useWindowSize();

	const widthSize = () => {
		if (isMobile) return 300;
		if (isTablet) return 600;
		if (isDesktop) return 550;
	  };
	
	  const heightSize = () => {
		if (isMobile) return 220;
		if (isTablet) return 340;
		if (isDesktop) return 315;
	  };

	const getSlides = () => {
		const arraySlides = [];
		for (let i = 0; i < data?.slidesGallery?.length; i++) {
			arraySlides.push(
				{
					key: data?.slidesGallery[i]?.title,
					content: 
						<div className="videos-slider-ctn-carousel-item-video">
							<iframe 
								className="videos-slider-gallery-ctn-carousel-item"
								width={`${widthSize()}`}
								height={`${heightSize()}`}
								src={data?.slidesGallery[i]?.videoUrl}
								title={data?.slidesGallery[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="video-slider-gallery-description">{data?.slidesGallery[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};

	const getVideoGallery = () => (
		data?.slidesGalleryGallery?.map(item => (
			<div className="videos-slider-gallery-ctn-gallery-item">
				<iframe 
					className="videos-slider-gallery-ctn-gallery-item-video"
					width="100%"
					height="100%"
					src={item?.videoUrl}
					title={item?.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen 
				/>
				<p className="video-slider-gallery-description">{item?.title}</p>
			</div>
		))
	);

  return (
    <div className="videos-slider-gallery-ctn">
			<h3 className="videos-slider-gallery-title">{data?.titleSliderGallery}</h3>
			<div className="videos-slider-gallery-ctn-sliders-gallery">
				<div className="videos-slider-gallery-ctn-slider">
					<Carousel slides={getSlides()} showNavigation={true}/>
				</div>
				<div className="videos-slider-gallery-ctn-gallery">
					{getVideoGallery()}
				</div>
			</div>
    </div>
  );
};

export default VideosSliderGallery;