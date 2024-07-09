import React, { useState } from 'react';
import Tiktok from '../../assets/img/rss/tiktok.svg';
import Right from '../../assets/img/rss/arrow-right.svg';
import Left from '../../assets/img/rss/arrow-left.svg';
import './styles.css';

const Rss = () => {
  const [ showRSS, setShowRSS] = useState(true);

  return (
    <div className={`rss-ctn-primary ${showRSS ? 'hide' : ''}`}> 
      <div className="rss-ctn-tiktok">
        <a href="https://www.tiktok.com/@visitmexico_oficial/" target="_blank" rel="noopener noreferrer">
          <img src={Tiktok} alt="tiktok" className="rss-tiktok"/>
        </a>
      </div>
      <button className='rss-show' onClick={() => setShowRSS(!showRSS)}>
        {showRSS ?
        <div className="rss-ctn-arrows">
          <img src={Right} alt="tiktok" className="rss-arrows"/>
        </div>
        :
        <div className="rss-ctn-arrows">
          <img src={Left} alt="tiktok" className="rss-arrows"/>
        </div>}
      </button>
    </div>
  )
};

export default Rss;
