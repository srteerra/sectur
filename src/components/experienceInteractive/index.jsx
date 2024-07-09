import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css'

const ExperienceInteractive = ({ data }) => {
	const [weddingData, setWeddingData] = useState(data.buttons[0]);
	
	const colors = [
    "166, 32, 140, .5",
    "229, 38, 25, .5",
    "236, 6, 139, .5",
    "253, 167, 0, .5",
    "136, 194, 67, .5",
    "3, 160, 175, .5",
  ];

	const changeDataWedding = (info) => {
		setWeddingData(info);
	};

  const getButtons = () => (
		data?.buttons?.map(item => (
			<button 
				type="button" 
				className="experience-intercative-buttons-btn" 
				key={item.name}
				onClick={() => changeDataWedding(item)}
			>
				{item?.name}
			</button>
		))
	);
			console.log('weddingData?.links[0]?.name: ', weddingData?.links[0]?.name);
  return (
    <div className="experience-intercative-ctn">
      <h1 className="experience-intercative-title">{data?.title}</h1>
      <div className="experience-intercative-ctn-buttons">
        <div className="experience-intercative-ctn-buttons-list">
					{getButtons()}
        </div>
      </div>
      <div className="experience-intercative-ctn-desciption">
				<div className="experience-intercative-ctn-desciption-media">
					<div className="experience-intercative-ctn-desciption-media-description">
						<p className="experience-intercative-desciption-media-description">{weddingData?.descriptionInteractive}</p>
					</div>
					<div className="experience-intercative-ctn-desciption-media-images">
						<div className="experience-intercative-ctn-desciption-media-images-top">
							<div className="experience-intercative-ctn-desciption-media-image-top-link">
								<LazyLoadImage 
									src={require(`../../assets/img/experiences/wedding/${weddingData?.links[0]?.imageUrl || 'BodaTradicionalNahua.webp'}`)}
									alt={weddingData?.links[0]?.name || 'boda'}
									className="experience-intercative-desciption-media-image-top"
								/>
								<div className="experience-intercative-ctn-desciption-media-images-top-hover-left" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
									<a href={weddingData?.links[0]?.link[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-intercative-desciption-media-image-top-link">
										<p className="experience-intercative-desciption-media-image-top-link-description">{weddingData?.links[0]?.link[0]?.name || 'boda'}</p>
									</a>
								</div>
							</div>
							<div className="experience-intercative-ctn-desciption-media-image-top-link">
								<LazyLoadImage 
									src={require(`../../assets/img/experiences/wedding/${weddingData?.links[1]?.imageUrl || 'BodaTradicionalNahua.webp'}`)}
									alt={weddingData?.links[1]?.name || 'boda'}
									className="experience-intercative-desciption-media-image-top"
								/>
								<div className="experience-intercative-ctn-desciption-media-images-top-hover-left" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
									<a href={weddingData?.links[1]?.link[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-intercative-desciption-media-image-top-link">
										<p className="experience-intercative-desciption-media-image-top-link-description">{weddingData?.links[1]?.link[0]?.name || 'boda'}</p>
									</a>
								</div>
							</div>
						</div>
						<div className="experience-intercative-ctn-desciption-media-images-bottom">
							<div className="experience-intercative-ctn-desciption-media-image-top-link">
								<LazyLoadImage 
									src={require(`../../assets/img/experiences/wedding/${weddingData?.links[2]?.imageUrl || 'BodaTradicionalNahua.webp'}`)}
									alt={weddingData?.links[2]?.name || 'boda'}
									className="experience-intercative-desciption-media-image-top"
								/>
								<div className="experience-intercative-ctn-desciption-media-images-top-hover-left" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
									<a href={weddingData?.links[2]?.link[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-intercative-desciption-media-image-top-link">
										<p className="experience-intercative-desciption-media-image-top-link-description">{weddingData?.links[2]?.link[0]?.name || 'boda'}</p>
									</a>
								</div>
							</div>
							<div className="experience-intercative-ctn-desciption-media-images-bottom-right">
								<div className="experience-intercative-ctn-desciption-media-image-top-link">
									<LazyLoadImage 
										src={require(`../../assets/img/experiences/wedding/${weddingData?.links[3]?.imageUrl || 'BodaTradicionalNahua.webp'}`)}
										alt={weddingData?.links[3]?.name || 'boda'}
										className="experience-intercative-desciption-media-image-top"
									/>
									<div className="experience-intercative-ctn-desciption-media-images-top-hover-left" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
										<a href={weddingData?.links[3]?.link[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-intercative-desciption-media-image-top-link">
											<p className="experience-intercative-desciption-media-image-top-link-description">{weddingData?.links[3]?.link[0]?.name || 'boda'}</p>
										</a>
									</div>
								</div>
								<div className="experience-intercative-ctn-desciption-media-image-top-link">
									<LazyLoadImage 
										src={require(`../../assets/img/experiences/wedding/${weddingData?.links[4]?.imageUrl || 'BodaTradicionalNahua.webp'}`)}
										alt={weddingData?.links[4]?.name || 'boda'}
										className="experience-intercative-desciption-media-image-top"
									/>
									<div className="experience-intercative-ctn-desciption-media-images-top-hover-left" style={{ background: `rgba(${colors[Math.floor(Math.random()*6)]})` }}>
										<a href={weddingData?.links[4]?.link[0]?.dir} target="_blank" rel="noopener noreferrer" className="experience-intercative-desciption-media-image-top-link">
											<p className="experience-intercative-desciption-media-image-top-link-description">{weddingData?.links[4]?.link[0]?.name || 'boda'}</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
    </div>
  );
};

export default ExperienceInteractive;
