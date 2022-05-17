import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const HeroProfile = () => {
	// useLocation hook to access the location of state property from HeroTotalDisplay component
	let location = useLocation();
	const data = location.state;
	// Calculated accrued vacation days
	const vacationDays = Math.floor(data.total / 30);

	return (
		<div className="hero-profile-page">
			<div className="wrapper">
				<Link to="/mappage" className="close-btn"><FontAwesomeIcon icon={faXmark}/></Link>
				<div class="profile-full-img">
					<img src={data.fullImage.src} alt="" />
				</div>
				<div class="profile-shield">
					<img src={data.shieldImage.src} alt="" />
				</div>
				<div className="profile-bio">
					<h1>{data.hero}</h1>
					<h2>Successfully Deployed</h2>
					<div>
						<p>{data.bio}</p>
						<p>Total earthquakes attended: {data.total}</p>
						<p>Vacation days accrued: {vacationDays}</p>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default HeroProfile;
