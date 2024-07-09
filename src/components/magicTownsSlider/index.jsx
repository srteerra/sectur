import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowSize from '../../utils/useWindowSize';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const MagicTownsSlider = ({ data }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [changeSlideCount, setChangeSlideCount] = useState(0);
	const [slideCount, setSlideCount] = useState(0);

	const nextSlide = () => {
    if (slideCount >= -changeSlideCount) {
      setSlideCount(slideCount - 1);
    }
  };

  const prevSlide = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount + 1);
    }
  };

  useEffect(() => {
    if (isMobile) return setChangeSlideCount(6);
    if (isTablet) return setChangeSlideCount(5);
    if (isDesktop) return setChangeSlideCount(3);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className="magic-towns-slider-ctn">
			<h2 className="magic-towns-slider-title">{data?.titleSlider}</h2>
			<div >
				<div className="magic-towns-slider-ctn-cards" >
				{data?.slidersExplore?.map(item => (
        <a href={item?.link}  target="_blank" rel="noreferrer">
          <div className="magic-towns-slider-ctn-card" style={{transform: `translate(${slideCount}00%)`}}>
            <div className="magic-towns-slider-ctn-card-title">{item.title}</div>
            <LazyLoadImage
              src={require(`../../assets/img/magicTowns/${item?.imageUrl}`)}
              alt={item?.title}
              className="magic-towns-slider-card-img"
            />
          </div>
          </a>
        ))}
				</div>
				<div className="magic-towns-slider-ctn-buttons">
					<button className="magic-towns-slider-buttons" onClick={() => prevSlide()} >
							<img className="magic-towns-slider-buttons-img" src={Left} alt="arrow right" />
					</button>
					<button className="magic-towns-slider-buttons" onClick={() => nextSlide()} >
						<img className="magic-towns-slider-buttons-img" src={Right} alt="arrow right" />
					</button>
				</div>
			</div>
		</div>
  );
};

export default MagicTownsSlider;