import { Route, Routes, Link, useParams } from 'react-router-dom';
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
            </div>
        </div>
    )
}

export default HomePage;