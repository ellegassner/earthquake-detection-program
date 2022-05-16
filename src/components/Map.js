// modules
import { MapContainer, TileLayer } from "react-leaflet";

// map styling
import "leaflet/dist/leaflet.css";

// components
import MapMarker from "./MapMarker";

const Map = ({ earthquakesData }) => {
	const markerList = earthquakesData;

	return (
		<MapContainer
			className="map"
			center={[12.97229395161727, -12.825540370374128]}
			zoom={1.5}
			scrollWheelZoom={true}
		>

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			

			{/* Render the markers */}
			{markerList.map((marker) => {
				// grab the lat and long
				const incidentLon = marker.geometry.coordinates[0];
				const incidentLat = marker.geometry.coordinates[1];
				const incidentId = marker.id;
				const incidentMag = marker.properties.mag;
				const incidentPlace = marker.properties.place;
				// checks the magnitude against the hero ranges and return hero name
				const assignHero = (incidentMag) => {
					if (incidentMag >= 0 && incidentMag < 3.5) {
						return "General Geology Teacher";
					} else if (incidentMag >= 3.5 && incidentMag < 6) {
						return "Rich Moral";
					} else if (incidentMag >= 6 && incidentMag < 7) {
						return "StrongGoode";
					} else {
						return "All";
					}
				};

				const incidentHero = assignHero(incidentMag);

				return (
					// map over the list of coordinates, create a component for each
					<MapMarker
						key={incidentId}
						lat={incidentLat}
						lon={incidentLon}
						magnitude={incidentMag}
						place={incidentPlace}
						hero={incidentHero}
					/>
				);
			})}
		</MapContainer>
	);
};
export default Map;
