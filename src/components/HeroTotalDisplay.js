
const HeroTotalDisplay = ({hero, total}) => {

    // const hero = {
    //     name: "General Geology-Teacher",
    //     imageSrc:"",
    //     color:"teal",
    //     total:10
    // }

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

    console.log(hero.toLowerCase());
    return(
        <div className="hero-total">
            <div className={`legend ${heroColour}-background`}></div>
            <div><img src={heroImageSource} alt={`icon for ${hero}`} /></div>
            <p>{total}</p>
        </div>
    )
}

export default HeroTotalDisplay;