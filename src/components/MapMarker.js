// modules
import { Marker, Popup } from "react-leaflet";

// import marker icon (this is a fix to ensure the marker renders properly)
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("../assets/teal-marker.png"),
	iconUrl: require("../assets/teal-marker.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapMarker = ({ lat, lon, magnitude, place, hero }) => {
	return (
		<Marker position={[lat, lon]}>
			<Popup>
				Magnitude: {magnitude}
				<br />
				Place: {place}
				<br />
				Hero: {hero}
			</Popup>
		</Marker>
	);
};
export default MapMarker;
