import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import { IsLogIn } from "./IsLoIn";
import { IsNotLogIn } from "./IsNotLogIn";

export const Navigation = () => {

    const { user, logOutHandler } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HOME</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>

                        {user ? <IsLogIn logOutHandler={logOutHandler} /> : <IsNotLogIn />}

                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li> */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}