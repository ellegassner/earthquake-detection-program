import { Route, Routes, Link, useParams } from 'react-router-dom';
import QuestionsPageImg from "../assets/homepage-three-shields.png"

const QuestionsPage = () => {
    return (
        <div className="questions-page">
            <div className="wrapper">
                <img src={QuestionsPageImg} alt="Questions page three shields" />
                <h2>Extraordinary collective of superheroes</h2>
                <p>When an incident, such as an earthquake, occurs, we are the superheroes that handle the event! The magnitude of the earthquake is what determines which superhero is sent</p>
                <p>This app allows us to monitor the earthquake & to deploy the right superhero for the job. Based on how many incidents the superhero has attended, they will accrue vacation days!</p>
                <p>
                    <span>Step 1: Click on "Find Earthquakes"</span>
                    <span>Step 2: View earthquakes that have happened within 24 hours</span>
                    <span>Step 3: To see total amount of incidents attended to by each superhero, click on their portrait</span>
                </p>
                <Link to='/mappage'>Find Earthquakes</Link>
            </div>
        </div>
    )
}

export default QuestionsPage;