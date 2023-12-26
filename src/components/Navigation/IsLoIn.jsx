import { Link } from "react-router-dom";

export const IsLogIn = ({
    logOutHandler,
}) => {
    return (
        <>

            <li className="nav-item">
                <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <button className="nav-link" href="" onClick={logOutHandler}>Log Out</button>
            </li>

        </>
    )

}