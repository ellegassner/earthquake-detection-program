// modules
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

// import marker icon (this is a fix to ensure the marker renders properly)
import * as L from "leaflet";
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
// 	iconRetinaUrl: require(`../assets/blue-marker.png`),
// 	iconUrl: require(`../assets/blue-marker.png`),
// 	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const MapMarker = ({ lat, lon, magnitude, place, hero }) => {
	//  Create the Icon
	const LeafIcon = L.Icon.extend({
		options: {
			iconSize: [21, 40], // size of the icon
			iconAnchor: [10, 0], // point of the icon which will correspond to marker's location
			popupAnchor: [0, -5], // point from which the popup should open relative to the iconAnchor
		},
	});

	// create colored icons
	const tealIcon = new LeafIcon({
		iconUrl: require("../assets/teal-marker.png"),
	});
	const blueIcon = new LeafIcon({
		iconUrl: require("../assets/blue-marker.png"),
	});
	const purpleIcon = new LeafIcon({
		iconUrl: require("../assets/purple-marker.png"),
	});
	const darkPurpleIcon = new LeafIcon({
		iconUrl: require("../assets/dark-purple-marker.png"),
	});

	//  Use the state hook:
	const [icon, setIcon] = useState(blueIcon);

	// determine the color of the marker on the map based on magnitude
	const pickMarkerColor = (hero) => {
		// determine image path based on hero
		let markerColor;
		if (hero === "General Geology Teacher") {
			markerColor = "teal";
		} else if (hero === "Rich Moral") {
			markerColor = "blue";
		} else if (hero === "StrongGoode") {
			markerColor = "purple";
		} else {
			markerColor = "dark-purple";
		}
		return markerColor;
	};

	const changeIcon = (markerColor) => {
		if (markerColor === "blue") {
			setIcon((current) => (current = blueIcon));
		} else if (markerColor === "teal") {
			setIcon((current) => (current = tealIcon));
		} else if (markerColor === "purple") {
			setIcon((current) => (current = purpleIcon));
		} else {
			setIcon((current) => (current = darkPurpleIcon));
		}
	};

	useEffect(() => {
		// pick the marker color based on hero
		const markerColor = pickMarkerColor(hero);
		changeIcon(markerColor);
	}, []);

	return (
		<Marker position={[lat, lon]} icon={icon}>
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
