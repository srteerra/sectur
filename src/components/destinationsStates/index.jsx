import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const DestinationsStates = ({ data }) => {
	const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];
  console.log('data?.states: ', data?.states);
	const getDEstinations = () => (
		data?.states?.map(item => (
			<Link 
				to={`/destinos/${item?.id}`} 
				key={item?.id}
				className="destinations-states-ctn-card"
			>
				<LazyLoadImage 
					src={require(`../../assets/img/destinations/${item?.urlImg}`)}
					alt={item?.id}
					className="destinations-states-card-img"
				/>
				<p className="destinations-states-card-text-hover">{item?.titleTop}</p>
				<div className="destinations-states-ctn-card-hover" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
					<p className="destinations-states-card-text">{item?.titleTop}</p>
					<span 
						to={`/destinos/${item?.id}`}
						className="destinations-states-card-link"
					>
						{data?.textButton}
					</span>
				</div>
			</Link>
		))
	);

  return (
    <div className="destinations-states-ctn">

		<div className="home-know-ctn-title">
			<h1 className="home-know-title">
				{data.exploraTitle}
			</h1>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">
						{data.exploraParrafo}
					</p>
					<p className="home-know-description-title">
						{data.exploraParrafo2}
					</p>
				</div>
			</div>
      	</div>

		<div className="home-know-ctn-title">
			<h2 className="home-know-title">
				{data.sumergeteTitle}
			</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">
						{data.sumergeteParrafo}
					</p>
				</div>
			</div>
      	</div>


		<div className="home-know-ctn-title">
			<h2 className="home-know-title">
				{data.encuentraTitle}
			</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">
						{data.encuentraParrafo}
					</p>
				</div>
			</div>
      	</div>


		<div className="home-know-ctn-title">
			<h2 className="home-know-title">
				{data.planificaTitle}
			</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">
						{data.planificaParrafo}
					</p>
					<p className="home-know-description-title">
						{data.planificaParrafo2}
					</p>
				</div>
			</div>
      	</div>

      <h2 className="destinations-states-title">{data?.title}</h2>
      <div className="destinations-states-ctn-gallery">
        {getDEstinations()}
      </div>


	 

    </div>
  );
};

export default DestinationsStates;
