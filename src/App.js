// Styling
import "./styles/sass/App.scss";
// Firebase Config
import firebase from "./firebase";
import {
	getDatabase,
	ref,
	onValue,
	push,
	remove,
	set,
	update,
	get,
} from "firebase/database";
//modules
import { useEffect, useState } from "react";
import axios from "axios";

// components
import Map from "./components/Map";

function App() {
	const [earthquakesData, setEarthquakesData] = useState([]);
	const [todaysEarthquakeData, setTodaysEarthquakeData] = useState([]);

	const startDate = "2022-05-05"; //start tracking from project start date
	let today = new Date();
	let userDate = (today.toLocaleDateString("en-US"));
	

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
		})
			.then((response) => {
				const listOfEarthquakes = response.data.features;
				setEarthquakesData(listOfEarthquakes);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		loadDataToFirebase(earthquakesData);

	}, [earthquakesData]);

	useEffect(() => {
		getEqDataFromApi(startDate);
	}, []);

	// Firebase Database
	const loadDataToFirebase = (earthquakesData) => {
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/incidents/${startDate}`);

		set(dbRef, earthquakesData);

		// Getting Data from Firebase
		get(dbRef).then((snapshot) => {
			const firebaseData = snapshot.val();
			const copyOfFirebaseData = [...firebaseData];

			// Filtering through the Data
			const todaysEarthquakeData = copyOfFirebaseData.filter((incident) => {
				// Converting the time
				let rawDate = new Date(incident.properties.time);
				let convertedDate = (rawDate.toLocaleDateString("en-US"));
				
				return userDate === convertedDate;
			});
			setTodaysEarthquakeData(todaysEarthquakeData);
		})
	};

	console.log("today", todaysEarthquakeData);

	return (
		<div className="App">
			<h1>Hello world!</h1>
			<Map earthquakesData={todaysEarthquakeData} />
		</div>
	);
}

export default App;
