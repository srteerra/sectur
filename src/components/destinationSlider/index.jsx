import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const DestinationSlider = ({ data }) => {
	const [slideCount, setSlideCount] = useState(0);

	const nextSlide = () => {
    if (slideCount >= -2) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

	const getSliderItem = () => (
		data?.slider?.map(item => (
			<div className="destination-slider-ctn-slide-images" style={{transform: `translate(${slideCount}00%)`}}>
				<LazyLoadImage 
					src={require(`../../assets/img/destinations/${item.urlImg}`)}
					alt={item.name}
					className="destination-slider-slide-images"
				/>
			</div>
		))
	);

  return (
    <div className="destination-slider-ctn">
			<div className="destination-slider-ctn-images">
				{getSliderItem()}
			</div>
      <div className="destination-slider-ctn-buttons">
        <button type="button" className="destination-slider-buttons" onClick={() => prevSlide()} >
            <img className="destination-slider-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button type="button" className="destination-slider-buttons" onClick={() => nextSlide()} >
          <img className="destination-slider-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
			<div className="destination-slider-ctn-link">
				<a href={data?.actions?.button?.dir} target="_blank" rel="noopener noreferrer" className="destination-slider-link">
					{data?.actions?.button?.text}
				</a>
      </div>
    </div>
  );
};

export default DestinationSlider;
