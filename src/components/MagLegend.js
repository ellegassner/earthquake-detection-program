const MagLegend = () => {
    return(
        <div className="mag-legend">
            <h3>Magnitudes legend (Mw)</h3>
            <div className="legend-details">
                <ul className="teal-legend-details">
                    <li className="teal-background"></li>
                    <li><span>&#60;</span> 3.5</li>
                </ul>
                <ul className="blue-legend-details">
                    <li className="blue-background"></li>
                    <li>3.5-6</li>
                </ul>
                <ul className="blue-legend-details">
                    <li className="purple-background"></li>
                    <li>6-7</li>
                </ul>
                <ul className="dark-purple-legend-details">
                    <li className="dark-purple-background"></li>
                    <li><span >&#62;</span> 7 </li>
                </ul>
            </div>
        </div>
    );
}

export default MagLegend;