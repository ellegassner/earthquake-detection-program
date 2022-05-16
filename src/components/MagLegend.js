const MagLegend = () => {
    return(
        <div className="mag-legend">
            <h3>Magnitudes legend (Mw)</h3>
            <div className="legend-details">
                <ul className="teal-legend-details">
                    <li className="teal-legend-colour">Teal</li>
                    <li><span>&#60;</span> 3.5</li>
                </ul>
                <ul className="blue-legend-details">
                    <li className="blue-legend-colour">Blue</li>
                    <li>3.5-6</li>
                </ul>
                <ul className="purple-legend-details">
                    <li className="purple-legend-colour">Purple</li>
                    <li>6-7</li>
                </ul>
                <ul className="dark-purple-legend-details">
                    <li className="dark-purple-legend-colour">Dark</li>
                    <li>7 <span >&#60;</span></li>
                </ul>
            </div>
        </div>
    );
}

export default MagLegend;