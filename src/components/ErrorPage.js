import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops! There's nothing here!</h2>
            <h3>
                <Link to="/">Click here to go back to the Home Page</Link>
            </h3>
        </div>
    )
}

export default ErrorPage;