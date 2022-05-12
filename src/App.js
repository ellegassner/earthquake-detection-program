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
import TotalEarthquakeDisplay from "./components/TotalEarthquakeDisplay";

function App() {
	const [earthquakesData, setEarthquakesData] = useState([]);
	const [todaysEarthquakeData, setTodaysEarthquakeData] = useState([]);
	const [todaysCount, setTodaysCount] = useState([]);
	const [totalCount, setTotalCount] = useState([]);

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
		const fetchData = async () => {
			function sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			}

			await loadDataToFirebase(earthquakesData);
			await sleep(1000);
			await getDataFromFirebase();

			const allTotalCount = getTotals(earthquakesData);
			setTotalCount(allTotalCount);
		}
		fetchData();
	}, [earthquakesData]);

	useEffect(() => {
		const todayTotalCount = getTotals(todaysEarthquakeData);
		setTodaysCount(todayTotalCount);
	}, [todaysEarthquakeData]);

	useEffect(() => {
		getEqDataFromApi(startDate);
	}, []);

	// Firebase Database
	const loadDataToFirebase = async(earthquakesData) => {
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/incidents/${startDate}`);

		set(dbRef, earthquakesData);
	};


	//dummy object containing heroes
	//TODO:update with totals from E/R
	const heroesSummary = [
		{
			name: "general geology-teacher",
			totalIncidents: 3000,
			incidentsOver24Hrs: 90,
		},
		{
			name: "rich moral",
			totalIncidents: 1000,
			incidentsOver24Hrs: 50,
		},
		{
			name: "stronggoode",
			totalIncidents: 300,
			incidentsOver24Hrs: 7,
		},
		{
			name: "all",
			totalIncidents: 4300,
			incidentsOver24Hrs: 147,
		},
	];

	const getDataFromFirebase = async() => {
		const database = getDatabase(firebase);
		const dbRef = ref(database, `/incidents/${startDate}`);

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
	}
	
	const getTotals = (earthquakesData) => {

		const copyOfEarthQuakeData = [...earthquakesData];
		
		const teal = copyOfEarthQuakeData.filter((incident) => {
			const incidentMag = incident.properties.mag;
			if (incidentMag < 3) {
				return incidentMag;
			}
		});

		const blue = copyOfEarthQuakeData.filter((incident) => {
			const incidentMag = incident.properties.mag;
			if (incidentMag >= 3 && incidentMag < 6) {
				return incidentMag;
			}
		});

		const purple = copyOfEarthQuakeData.filter((incident) => {
			const incidentMag = incident.properties.mag;
			if (incidentMag >= 6 && incidentMag < 7) {
				return incidentMag;
			}
		});

		const darkPurple = copyOfEarthQuakeData.filter((incident) => {
			const incidentMag = incident.properties.mag;
			if (incidentMag >= 7) {
				return incidentMag;
			}
		});
		
		const heroTotals = {
			geoTeacher: teal.length,
			richMoral: blue.length,
			strongGoode: purple.length,
			allTeam: darkPurple.length,
		}
		return heroTotals;
	}


	return (
		<div className="App">
			<h1>Hello world!</h1>

			<Map earthquakesData={earthquakesData} />
			<TotalEarthquakeDisplay heroesSummary={heroesSummary}/>

			<Map earthquakesData={todaysEarthquakeData} />
			<p>Today Teal: {todaysCount.geoTeacher}</p>
			<p>Total Teal: {totalCount.geoTeacher}</p>
			<p>Today Blue: {todaysCount.richMoral}</p>
			<p>Total Blue: {totalCount.richMoral}</p>
			<p>Today Purple: {todaysCount.strongGoode}</p>
			<p>Total Purple: {totalCount.strongGoode}</p>
			<p>Today Dark Purple: {todaysCount.allTeam}</p>
			<p>Total Dark Purple: {totalCount.allTeam}</p>

		</div>
	);
}

export default App;
