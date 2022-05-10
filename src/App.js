// Styling
import "./styles/sass/App.scss";
// Firebase Config
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove, set, update } from "firebase/database";
//modules
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
	const [earthquakesData, setEarthquakesData] = useState([]);

	const startDate = "2022-05-05"; //start tracking from project start date

	//function to get earthquake data from USGS API.
	//startTime argument passed to the function, limits data to events on or after the specified start time
	const getEqDataFromApi = (startTime) => {
		axios({
			url: "https://earthquake.usgs.gov/fdsnws/event/1/query",
			method: "GET",
			dataResponse: "json",
			params: {
				format: "geojson",
				starttime: startTime,
				eventtype: "earthquake",
				minmagnitude: 0,
				// orderby:"magnitude",
			},
		}).then((response) => {
			const listOfEarthquakes = response.data.features;
			setEarthquakesData(listOfEarthquakes);
		}).catch((err) => console.log(err));
	}

	useEffect(() => {
		loadDataToFirebase(earthquakesData);
	}, [earthquakesData])

	useEffect(() => {
		getEqDataFromApi(startDate);
	}, []);

	// Firebase Database
	const loadDataToFirebase = (earthquakesData) => {
		const database = getDatabase(firebase)
		const dbRef = ref(database, `/incidents/${startDate}`)

		set(dbRef, earthquakesData);
	}


	console.log(earthquakesData);
	return (
		<div className="App">
			<h1>Hello world!</h1>
		</div>
	);
}

export default App;
