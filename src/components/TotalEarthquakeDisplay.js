import HeroTotalDisplay from "./HeroTotalDisplay";

// prop - heroesSummary array of objects with heros and total incidents (overall and over the past 24hrs)
// map over array to display
const TotalEarthquakeDisplay = ({heroesSummary, firstIncidentDate}) => {
    return (
        <div className="total-display">
            <h2>Total earthquake incidents since:<span>{firstIncidentDate}</span></h2>
            <ul>
                {
                    heroesSummary.map(hero => {
                        return (
                            <HeroTotalDisplay
                                key={hero.name}
                                hero={hero.name}
                                total={hero.totalIncidents}
                                bio={hero.bio}
                                fullImage={hero.fullImage}
                                shieldImage={hero.shieldImage}
                                icon={hero.icon}
                                color={hero.color}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TotalEarthquakeDisplay;