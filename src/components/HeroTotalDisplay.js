import { Link } from 'react-router-dom';

const HeroTotalDisplay = ({hero, total, bio, fullImage, shieldImage, icon, color}) => {

    const heroData = {
        hero: hero,
        bio: bio,
        total: total,
        fullImage: fullImage,
        shieldImage: shieldImage
    };


    return(
        <li>
            <Link to={'/heroprofile'} state={heroData} className="hero-total">
                <div className={`legend ${color}-background`}></div>
                <div><img src={icon.src} alt={icon.alt} /></div>
                <p>{total}</p>
            </Link>
        </li>
    )
}

export default HeroTotalDisplay;