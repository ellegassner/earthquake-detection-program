import HeroTotalDisplay from "./HeroTotalDisplay";

// prop - heroesSummary array of objects with heros and total incidents (overall and over the past 24hrs)
// map over array to display
const TotalEarthquakeDisplay = ({heroesSummary}) => {
    return (
        <div>
            <h2>Total earthquake incidents since May 5, 2022</h2>
            {
                heroesSummary.map(hero => {
                    return (
                        <HeroTotalDisplay
                            key={hero.name}
                            hero={hero.name}
                            total={hero.totalIncidents}
                        />
                    );
                })
            }
        </div>
    );
}

export default TotalEarthquakeDisplay;