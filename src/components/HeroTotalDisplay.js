import { Link } from 'react-router-dom';

const HeroTotalDisplay = ({hero, total, bio, fullImage, shieldImage}) => {

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

    const getHeroImageSrc = (hero) => {
        switch (hero.toLowerCase()) {
            case "general geology-teacher":
                return require("../assets/geo-teacher-headshot-transparent.png");
            case "rich moral":
                return require("../assets/rich-moral-headshot-transparent.png");
            case "stronggoode":
                return require("../assets/stronggoode-headshot-transparent.png");
            default:
                return require("../assets/three-shields-transparent.png");
        }
    }

    const heroColour = getHeroColour(hero);
    const heroImageSource = getHeroImageSrc(hero);

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
                <div className={`legend ${heroColour}-background`}></div>
                <div><img src={heroImageSource} alt={`icon for ${hero}`} /></div>
                <p>{total}</p>
            </Link>
        </li>
    )
}

export default HeroTotalDisplay;