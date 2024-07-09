import React from 'react';
import ArrowLink from '../../assets/img/rss/arrow-link.svg';
import './styles.css';

const ExperienceCards = ({ data }) => {
  const getCards = () => (
    data?.cardsGallery?.map(item => (
      <div className="experience-cards-ctn-card" key={item.title}>
        <h5 className="experience-cards-card-title">{item.title}</h5>
        <p className="experience-cards-card-date">{item.date}</p>
        <div className="experience-cards-ctn-card-date-description">
          <div className="experience-cards-ctn-card-date">
            <p className="experience-cards-card-date-month">{item.month}</p>
            <div className="experience-cards-ctn-card-day">
              <p className="experience-cards-card-day">{item.day}</p>
            </div>
          </div>
          <div className="experience-cards-ctn-card-description">
            <p className="experience-cards-card-description">{item.description}</p>
            <a href={item.dir} target="_blank" rel="noopener noreferrer" className="experience-cards-card-button">
              <img src={ArrowLink} alt="arrow link" className="experience-cards-card-arrow"/>
            </a>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section className="experience-cards-ctn">
      <div className="experience-cards-ctn-cards">
        {getCards()}
      </div>
    </section>
  )
};

export default ExperienceCards;
