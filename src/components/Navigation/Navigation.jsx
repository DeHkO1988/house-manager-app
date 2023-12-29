import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import { IsLogIn } from "./IsLoIn";
import { IsNotLogIn } from "./IsNotLogIn";

export const Navigation = () => {

    const { user, userInfo, logOutHandler } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">




                        {user ? <IsLogIn logOutHandler={logOutHandler} /> : <IsNotLogIn />}

                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li> */}

                        {userInfo &&
                            <>
                                <li className="nav-item">
                                    <p className="nav-link" to="/catalog">Hello: {userInfo.full_name}</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" to="/catalog">Status: {userInfo.isadmin ? "ADMIN" : "REGULAR"}</p>
                                </li>

                            </>

                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}