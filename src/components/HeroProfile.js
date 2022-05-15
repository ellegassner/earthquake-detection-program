import { Link, useLocation } from 'react-router-dom';


const HeroProfile = () => {
    let location = useLocation();
    const data = location.state;

    return (   
        <div className="hero-profile-page">
            <div className="wrapper">
                <Link to='/mappage'>X</Link>
                
                <h1>{data.hero.hero}</h1>
                <h3>Successfully Deployed</h3>
                <p>{data.bio.bio}</p>
            </div>
        </div>
    )
}

export default HeroProfile;