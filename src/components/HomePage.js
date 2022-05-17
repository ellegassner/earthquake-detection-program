import { Link } from 'react-router-dom';
import HomePageImg from "../assets/homepage-three-shields.png"


const HomePage = () => {
    return (
        <div className='home-page'>
            <div className="wrapper">
                <h1>
                    <span className='left-align'>the</span>
                    <span className='title'>extraordinary collective of superheroes</span>
                    <span className='right-align'>are here to help</span>
                </h1>
                <div>
                    <img src={HomePageImg} alt="Home page three shields" />
                </div>
                <Link to='/questionspage' className='btn'>Learn what we do</Link>
                <footer>Created by
                    <a href="https://www.nicolebeckles.dev/" target="_blank" rel="noopener noreferrer"> Nicole Beckles | </a>
                    <a href="https://www.royalbai.com" target="_blank" rel="noopener noreferrer">Royal Bai | </a>
                    <a href="https://www.gabrielwright.ca" target="_blank" rel="noopener noreferrer">Gabriel Wright | </a>
                    <a href="https://www.ellegassner.ca" target="_blank" rel="noopener noreferrer">Elle Gassner </a> at
                    <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer"> Juno College of Technology</a>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;