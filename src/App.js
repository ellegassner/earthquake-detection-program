// Styling
import "./styles/sass/App.scss";
// Firebase Config
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove, set, update } from "firebase/database";
// React Hooks
import { useState, useEffect } from "react";


function App() {
	const [earthquakes, setEarthquakes] = useState([]);
	const [incidentsHero1, setIncidentsHero1] = useState("");
	const [incidentsHero2, setIncidentsHero2] = useState("");
	const [incidentsHero3, setIncidentsHero3] = useState("");
	const [incidentsHero4, setIncidentsHero4] = useState("");

	// Firebase Database
	useEffect(() => {
		const database = getDatabase(firebase)
		const dbRef = ref(database)

		onValue(dbRef, (res) => {
			const newState = [];
			const data = res.val();

			for (let key in data) {
				newState.push({
					key: key,
					hero1: data[key].hero1,
					hero2: data[key].hero2,
					hero3: data[key].hero3
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
	}

	return (
		<div className="App">
			<h1>Hello world</h1>
		</div>
	);
}

export default App;
