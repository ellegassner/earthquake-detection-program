import TodaysTotalHeroDisplay from "./TodaysTotalHeroDisplay";

const TodaysEarthquakeDisplay = ({heroesSummary}) => {
    return(
        <div>
            <h3>Incidents Within 24-Hours</h3>
            <ul>
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
            </ul>
        </div>
        
    )
}

export default TodaysEarthquakeDisplay;