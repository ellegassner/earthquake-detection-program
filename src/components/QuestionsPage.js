import { Route, Routes, Link, useParams } from 'react-router-dom';


const QuestionsPage = () => {
    return (
        <>
            <h1>Questions Hello!</h1>
            <Link to='/mappage'>Find Earthquakes</Link>
        </>
    )
}

export default QuestionsPage;