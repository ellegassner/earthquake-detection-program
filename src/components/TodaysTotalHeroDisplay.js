const TodaysTotalHeroDisplay = ({hero, total}) => {

    const getHeroColour = (hero) => {
        let color;
        switch (hero.toLowerCase()) {
            case "general geology-teacher":
                return "teal";
            case "rich moral":
                return "blue";
            case "stronggoode":
                return "purple";
            default:
                return "dark-purple";
        }
    }

    const heroColour = getHeroColour(hero);

    return(
        <div className="today-total">
            <div className={`legendBottom ${heroColour}-background`}> <p>{total}</p>
            </div>
        </div>
    )
}

export default TodaysTotalHeroDisplay;