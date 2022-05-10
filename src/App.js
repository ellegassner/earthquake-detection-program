// Styling
import "./styles/sass/App.scss";
// Firebase Config
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove, set, update } from "firebase/database";
// React Hooks
import { useState, useEffect } from "react";


//modules
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
	const [earthquakes, setEarthquakes] = useState([]);

	// Firebase Database
	useEffect(() => {
		const database = getDatabase(firebase)
		const dbRef = ref(database)

		onValue(dbRef, (res) => {
			const newState = [];
			const data = res.val();

			for (let key in data) {
				newState.push({
					
				});
			}

			setEarthquakes(newState);
		})
	}, [])

	// Incidents Database
	const incidentsReport = {
		hero1: incidentsHero1,
		hero2: incidentsHero2,
		hero3: incidentsHero3,
		hero4: incidentsHero4
	}
	const [earthquakesData, setEarthquakesData] = useState([]);

	const startDate = "2022-05-05"; //start tracking from project start date

	//function to get earthquake data from USGS API.
	//startTime argument passed to the function, limits data to events on or after the specified start time
	function getEqDataFromApi(startTime){
		axios({
			url: "https://earthquake.usgs.gov/fdsnws/event/1/query",
			method: "GET",
			dataResponse: "json",
			params: {
				format: "geojson",
				starttime: startTime,
				eventtype: "earthquake",
				minmagnitude:0,
				// orderby:"magnitude",
			},
		}).then((response) => {
			const listOfEarthquakes = response.data.features;
			setEarthquakesData(listOfEarthquakes);
		}).catch((err) => console.log(err));
	}

	useEffect(()=>{
		getEqDataFromApi(startDate);
	},[]);

	console.log(earthquakesData);
	return (
		<div className="App">
			<h1>Hello world</h1>
		</div>
	);
}

export default App;
