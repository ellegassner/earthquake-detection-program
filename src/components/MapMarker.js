// modules
import { Marker, Popup } from "react-leaflet";

// import marker icon (this is a fix to ensure the marker renders properly)
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapMarker = ({ lat, lon }) => {
	return (
		<Marker position={[lat, lon]}>
			<Popup>
				Behold! <br />
				The almighty marker!
			</Popup>
		</Marker>
	);
};
export default MapMarker;
