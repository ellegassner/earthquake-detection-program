// Styling
import "./styles/sass/App.scss";
// Firebase Config
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove, set, update } from "firebase/database";
// React Hooks
import { useState, useEffect } from "react";


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

	return (
		<div className="App">
			<h1>Hello world</h1>
		</div>
	);
}

export default App;
