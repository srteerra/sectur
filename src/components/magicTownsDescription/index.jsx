import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const MagicTownsDescription = ({ data }) => {
	const getText = () => (
		data?.descriptionTop?.map((item, index) => (
			<p className="magic-towns-description-decription-text" key={index}>{item?.text}</p>
			
		))
	);

  return (
    <div className="magic-towns-description-ctn">
			<div className="magic-towns-description-ctn-description">
				<div className="magic-towns-description-ctn-img">
					<LazyLoadImage 
						src={require(`../../assets/img/magicTowns/${data?.imageTopUrl}`)}
						alt={data?.title}
						className="magic-towns-description-img"
					/>
				</div>
				<div className="magic-towns-description-ctn-text">
					<h1 className="magic-towns-description-title">{data?.title}</h1>
					<div className="magic-towns-description-ctn-decription-text">
						
						{getText()}
						
					</div>
					{/*<div className='iconPuebloMagico'>
					<LazyLoadImage
					src={require(`../../assets/img/magicTowns/pueblos_magicos-logo.png`)}
					alt={data?.titleKnow}
					className="magic-towns-icon-des"/>
					</div>*/}
				</div>
			</div>
    </div>
  );
}

export default MagicTownsDescription