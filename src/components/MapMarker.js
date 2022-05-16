// modules
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

// import marker icon (this is a fix to ensure the marker renders properly)
import * as L from "leaflet";

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
		if (hero === "General Geology Teacher") {
			setIcon((current) => (current = tealIcon));
		} else if (hero === "Rich Moral") {
			setIcon((current) => (current = blueIcon));
		} else if (hero === "StrongGoode") {
			setIcon((current) => (current = purpleIcon));
		} else {
			setIcon((current) => (current = darkPurpleIcon));
		}
	};

	useEffect(() => {
		// pick the marker color based on hero
		pickMarkerColor(hero);
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
