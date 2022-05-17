const TodaysTotalHeroDisplay = ({ total, color}) => {

    return(
        <li className="today-total">
            <div className={`legendBottom ${color}-background`}> <p>{total}</p>
            </div>
        </li>
    )
}

export default TodaysTotalHeroDisplay;