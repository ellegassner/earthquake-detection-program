// modules
import { Marker, Popup } from "react-leaflet";

// import blue marker
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapMarker = () => {
	return (
		<Marker position={[51.505, -0.09]}>
			<Popup>
				Behold! <br />
				The almighty marker!
			</Popup>
		</Marker>
	);
};
export default MapMarker;
