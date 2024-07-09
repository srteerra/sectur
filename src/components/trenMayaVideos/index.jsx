import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowSize from '../../utils/useWindowSize';
import Carousel from 'react-spring-3d-carousel';
import './styles.css';

const TrenMayaVideos = ({ data }) => {

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
		for (let i = 0; i < data?.videos?.length; i++) {
			arraySlides.push(
				{
					key: data?.videos[i]?.title,
					content: 
						<div className="train-maya-video-slider-ctn-carousel-item-video">
							<iframe 
								className="train-maya-video-slider-ctn-carousel-item"
								width={`${widthSize()}`}
								height={`${heightSize()}`}
								src={data?.videos[i]?.urlVideo}
								title={data?.videos[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="train-maya-video-slider-description">{data?.videos[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};
  return (
	<div>
		<h1 className="galeria--titulo">{data.subTitle3}</h1>
		<div className="train-maya-video-slider-ctn-carousel">
		<Carousel slides={getSlides()} showNavigation={true}/>
		</div>
	</div>
 
  )
};

export default TrenMayaVideos;