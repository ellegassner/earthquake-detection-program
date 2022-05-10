// modules
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

// import marker icon (this is a fix to ensure the marker renders properly)
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

const MapMarker = ({ lat, lon, magnitude, place, hero }) => {
	const [color, setColor] = useState("");

	// determine the color of the marker on the map based on magnitude
	const pickMarkerColor = (hero) => {
		// determine image path based on hero
		let markerPath;
		if (hero === "General Geology Teacher") {
			markerPath = "teal-marker.png";
		} else if (hero === "Rich Moral") {
			markerPath = "blue-marker.png";
		} else if (hero === "StrongGoode") {
			markerPath = "purple-marker.png";
		} else {
			markerPath = "dark-purple-marker.png";
		}
		// console.log(hero, markerPath);

		setColor(markerPath);
		updateMarker(markerPath);
	};
	const updateMarker = (color) => {
		// change image path
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require(`../assets/${color}`),
			iconUrl: require(`../assets/${color}`),
			shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
		});
	};

	useEffect(() => {
		pickMarkerColor(hero);
	}, []);

	// useEffect(() => {
	// console.log(hero, color);
	// 	updateMarker(color);
	// }, []);

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
