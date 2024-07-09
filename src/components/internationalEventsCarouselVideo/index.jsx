import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import './styles.css';

const InternationalEventsCarouselVideo = ({ data }) => {
  const getSlides = () => {
		const arraySlides = [];
		for (let i = 0; i < data?.carousel?.length; i++) {
			arraySlides.push(
				{
					key: data?.carousel[i]?.title,
					content: 
						<div className="international-events-carousel-video-ctn-carousel-item-video">
							<iframe 
								className="international-events-carousel-video-ctn-carousel-item"
								width="100%"
								height="70%"
								src={data?.carousel[i]?.videoUrl}
								title={data?.carousel[i]?.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen 
							/>
							<p className="video-slider-description">{data?.carousel[i]?.title}</p>
						</div>
				}
			);
		};
		return arraySlides;
	};

  return (
    <section className="international-events-carousel-video-ctn">
      <div className="international-events-carousel-video-ctn-carousel">
				<Carousel slides={getSlides()} showNavigation={true}/>
			</div>
    </section>
  )
};

export default InternationalEventsCarouselVideo;
