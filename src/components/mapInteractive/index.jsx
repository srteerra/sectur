import React from 'react';
import './styles.css';

import { MapContainer, TileLayer, Tooltip, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { 
	Skull1Icon,
	Skull2Icon,
	Skull3Icon,
	Skull4Icon,
	Skull5Icon,
	Skull6Icon,
	Skull7Icon
 } from './react-leaflet-icon';
	
const MapIntersactive = ({ data }) => {
	const mapData = data?.map;

	const getDescription = (data) => data?.map((item, index) => (
		<p key={index} className="map-interactive-text" >{item?.text}</p>
	));

	const getIcon = (data) => {
		
		if(data === 'skull1') {
			return Skull1Icon
		}
		if(data === 'skull2') {
			return Skull2Icon
		}
		if(data === 'skull3') {
			return Skull3Icon
		}
		if(data === 'skull4') {
			return Skull4Icon
		}
		if(data === 'skull5') {
			return Skull5Icon
		}
		if(data === 'skull6') {
			return Skull6Icon
		}
		if(data === 'skull7') {
			return Skull7Icon
		}
		if(data === 'skull1') {
			return Skull1Icon
		}
		if(data === 'skull2') {
			return Skull2Icon
		}
		if(data === 'skull3') {
			return Skull3Icon
		}
		return Skull1Icon
	}

	const getMarkers = () => mapData?.markers?.map((item, index) => (
		<Marker position={item?.position} icon={getIcon(item?.icon)} key={`marker-${index}`}>
			<Tooltip>{getDescription(item?.description)}</Tooltip>
			<Popup>{getDescription(item?.description)}</Popup>
		</Marker>
	));

	return (
		<div className="map-interactive-ctn">
			<h3 className="map-interactive-title">{mapData?.title}</h3>
			<MapContainer 
				center={[23.6864274,-102.8642799]} 
				scrollWheelZoom={false}  
				maxBoundsViscosity={1.0}
				zoom={6}
				touchZoom={false}
				doubleClickZoom={false}
				boxZoom={false}
				keyboard={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					// url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png"
					// url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
				/>
				{getMarkers()}
			</MapContainer>
		</div>
	)
};

export default MapIntersactive;
