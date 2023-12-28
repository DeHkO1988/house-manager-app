
import { useContext, useEffect, useState } from "react";

import style from "../LogIn/LogIn.module.css";
import { UserContext } from "../Context/userContext";


export const LogIn = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { logInHandler, error, errorCleaner } = useContext(UserContext);

    useEffect(() => {
        return () => {
            errorCleaner()
        }
    }, []);



    const loginInformation = (e) => {
        setUser(({ ...user, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        logInHandler(e, user);
    };


    return (
        <div className={style.loginContainer}>
            {error.err &&
                <div className="alert alert-warning text-center" role="alert">
                    {error.err}
                </div>
            }

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" value={user.username} onChange={loginInformation} autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={loginInformation} autoComplete="true" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}