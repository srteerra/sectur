import React from 'react';
import './styles.css';

const ExperienceContentLink = ({ data }) => {
  const getDescription = () => (
    data?.description?.map((item, index) => (
      <p key={index}>{item?.text}</p>
    ))
  );

  return (
    <section className="experience-link-content-wellness-ctn">
      <div className="experience-link-content-wellness-ctn-description">
        {getDescription()}
        <a 
          href={data?.actions?.button?.dir}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-link-content-wellness-link"
        >
          {data?.actions?.button?.text}
        </a>
      </div>
    </section>
  )
};

export default ExperienceContentLink;
