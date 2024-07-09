import React, { useState, useEffect } from 'react';
import ArrowUp from '../../assets/img/rss/arrow-up.svg';
import './styles.css';

const ScrollToTop = () => {
	const [scrollIs, setScrollIs] = useState(0);

	const handleScrollToTop = () => {
		window?.scroll({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.onscroll = function() {
			var y = window.scrollY;
			setScrollIs(y)
		};
	}, []);

  return (
    <div className={`scroll-to-top-ctn ${scrollIs <= 1080 && 'hide'}`}>
			<button onClick={handleScrollToTop} className="scroll-to-top-btn-img">
				<img src={ArrowUp} alt="subir" className="scroll-to-top-img"/>
			</button>
    </div>
  );
};

export default ScrollToTop;