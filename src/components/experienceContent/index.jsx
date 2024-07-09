import React from 'react';
import './styles.css';

const ExperienceContent = ({data  }) => {
  const getDescription = () => (
    data?.description?.map((item, index) => (
      <p key={index}>{item?.text}</p>
    ))
  );

  return (
    <section className="experience-content-ctn">
      <div className="experience-content-ctn-description">
        {getDescription()}
      </div>
    </section>
  )
};

export default ExperienceContent;
