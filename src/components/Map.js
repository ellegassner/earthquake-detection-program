// modules
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

// map styling
import "leaflet/dist/leaflet.css";

// components
import MapMarker from "./MapMarker";

const Map = ({ earthquakesData }) => {
	const markerList = earthquakesData;
	// const markerListShort = markerList.slice(0, 5);

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
			{markerList.map((marker) => {
				// grab the lat and long
				const incidentLon = marker.geometry.coordinates[0];
				const incidentLat = marker.geometry.coordinates[1];
				const incidentId = marker.id;
				const incidentMag = marker.properties.mag;
				const incidentPlace = marker.properties.place;

				return (
					// map over the list of coordinates, create a component for each
					<MapMarker
						key={incidentId}
						lat={incidentLat}
						lon={incidentLon}
						magnitude={incidentMag}
						place={incidentPlace}
					/>
				);
			})}
		</MapContainer>
	);
};
export default Map;
