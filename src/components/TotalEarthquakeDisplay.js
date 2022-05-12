import HeroTotalDisplay from "./HeroTotalDisplay";
import TodaysTotalHeroDisplay from "./TodaysTotalHeroDisplay";

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
            <h3>Incidents Within 24-Hours</h3>
            {
                heroesSummary.map(hero => {
                    return (
                        <TodaysTotalHeroDisplay 
                            key={hero.name}
                            hero={hero.name}
                            total={hero.incidentsOver24Hrs}
                        />
                    );
                })
            }
        </div>
    );
}

export default TotalEarthquakeDisplay;