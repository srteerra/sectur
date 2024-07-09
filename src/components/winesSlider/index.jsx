import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const WinesSlider = ({ data }) => {
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
		data?.gallerySlider?.map(item => (
			<div className="wines-slider-ctn-slide-images" style={{transform: `translate(${slideCount}00%)`}}>
				<LazyLoadImage 
					src={require(`../../assets/img/wines/${item.urlImg}`)}
					alt={item.name}
					className="wines-slider-slide-images"
				/>
        <div className="wines-slider-ctn-link">
          <a href={item?.dir} target="_blank" rel="noopener noreferrer" className="wines-slider-link">
            {item?.name}
          </a>
        </div>
			</div>
		))
	);

  return (
    <div className="wines-slider-ctn">
			<div className="wines-slider-ctn-images">
				{getSliderItem()}
			</div>
      <div className="wines-slider-ctn-buttons">
        <button type="button" className="wines-slider-buttons" onClick={() => prevSlide()} >
            <img className="wines-slider-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button type="button" className="wines-slider-buttons" onClick={() => nextSlide()} >
          <img className="wines-slider-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default WinesSlider;
