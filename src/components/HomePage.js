import { Route, Routes, Link, useParams } from 'react-router-dom';


const HomePage = () => {
    return (
        <>
            <h1>Smoothie Hello!</h1>
            <Link to='/questionspage'>Questions</Link>
        </>
    )
}

export default HomePage;