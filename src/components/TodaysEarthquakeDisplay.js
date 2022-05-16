import TodaysTotalHeroDisplay from "./TodaysTotalHeroDisplay";

const TodaysEarthquakeDisplay = ({heroesSummary}) => {
    return(
        <div className="todays-display">
            <h3>Incidents Within 24-Hours</h3>
            <ul>
                {
                    heroesSummary.map(hero => {
                        return (
                            <TodaysTotalHeroDisplay 
                                key={hero.name}
                                hero={hero.name}
                                total={hero.incidentsOver24Hrs}
                                color={hero.color}
                            />
                        );
                    })
                }
            </ul>
        </div>
        
    )
}

export default TodaysEarthquakeDisplay;