import { Link, useLocation } from 'react-router-dom';


const HeroProfile = () => {
    let location = useLocation();
    const data = location.state;

    console.log("location", location)

    return (   
        <div className="hero-profile-page">
            <div className="wrapper">
                <Link to='/mappage'>X</Link>
                
                <h1>{data.hero}</h1>
                <h3>Successfully Deployed</h3>
                <p>{data.bio}</p>
                <p>{data.total}</p>
            </div>
        </div>
    )
}

export default HeroProfile;