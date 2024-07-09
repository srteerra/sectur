import React from 'react';
import ArrowLink from '../../assets/img/rss/arrow-link.svg';
import './styles.css';

const WinesCards = ({ data }) => {
  const getCards = () => (
    data?.cardsGallery?.map(item => (
      <div className="wines-cards-ctn-card" key={item.title}>
        <h5 className="wines-cards-card-title">{item.title}</h5>
        <p className="wines-cards-card-date">{item.date}</p>
        <div className="wines-cards-ctn-card-date-description">
          <div className="wines-cards-ctn-card-date">
            <p className="wines-cards-card-date-month">{item.month}</p>
            <div className="wines-cards-ctn-card-day">
              <p className="wines-cards-card-day">{item.day}</p>
            </div>
          </div>
          <div className="wines-cards-ctn-card-description">
            <p className="wines-cards-card-description">{item.description}</p>
            <a href={item.dir} target="_blank" rel="noopener noreferrer" className="wines-cards-card-button">
              <img src={ArrowLink} alt="arrow link" className="wines-cards-card-arrow"/>
            </a>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section className="wines-cards-ctn">
      <div className="wines-cards-ctn-cards">
        {getCards()}
      </div>
    </section>
  )
};

export default WinesCards;
