import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const MariaIslandsSlider = ({ data }) => {
	const [slideCount, setSlideCount] = useState(0);

	const nextSlide = () => {
    if (slideCount >= -1) {
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
			<div className="maria-islands-slider-ctn-slide-images" style={{transform: `translate(${slideCount}00%)`}}>
				<LazyLoadImage 
					src={require(`../../assets/img/mariaIslands/${item.urlImg}`)}
					alt={item.name}
					className="maria-islands-slider-slide-images"
				/>
        <div className="maria-islands-slider-ctn-link">
          <a href={item?.dir} target="_blank" rel="noopener noreferrer" className="maria-islands-slider-link">
            {item?.name}
          </a>
        </div>
			</div>
		))
	);

  return (
    <div className="maria-islands-slider-ctn">
			<div className="maria-islands-slider-ctn-images">
				{getSliderItem()}
			</div>
      <div className="maria-islands-slider-ctn-buttons">
        <button type="button" className="maria-islands-slider-buttons" onClick={() => prevSlide()} >
            <img className="maria-islands-slider-buttons-img" src={Left} alt="arrow right" />
        </button>
        <button type="button" className="maria-islands-slider-buttons" onClick={() => nextSlide()} >
          <img className="maria-islands-slider-buttons-img" src={Right} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default MariaIslandsSlider;
