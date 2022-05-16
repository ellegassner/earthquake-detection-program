import { Link, useLocation } from 'react-router-dom';


const HeroProfile = () => {
    let location = useLocation();
    const data = location.state;

    const vacationDays = Math.floor(data.total / 30);

    console.log(data.fullImage);


    return (   
        <div className="hero-profile-page">
            <div className="wrapper">
                <Link to='/mappage'>X</Link>
                
                <h1>{data.hero}</h1>
                <h3>Successfully Deployed</h3>
                <p>{data.bio}</p>
                <p>Total earthquakes attended: {data.total}</p>
                <p>Vacation days accrued: {vacationDays}</p>
                <div>
                    <img src={data.fullImage.src} alt="" />
                </div>
                <div>
                    <img src={data.shieldImage.src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroProfile;