// modules
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

// map styling
import "leaflet/dist/leaflet.css";

// components
import MapMarker from "./MapMarker";

const Map = () => {
	// sample list of marker coordinates
	const markerList = [
		[51.505, -0.09],
		[51.51, -0.1],
		[51.515, -0.2],
		[51.525, -0.08],
		[51.535, -0.05],
		[51.545, -0.3],
	];

	return (
		<MapContainer
			className="map"
			center={[51.505, -0.09]}
			zoom={10}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markerList.map((marker, index) => {
				// map over the list of coordinates, create a component for each
				return (
					<MapMarker key={index} lat={marker[0]} lon={marker[1]} />
				);
			})}
		</MapContainer>
	);
};
export default Map;
