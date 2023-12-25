
import { useContext, useState } from "react";

import style from "../LogIn/LogIn.module.css";
import { UserContext } from "../Context/userContext";


export const LogIn = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { logInHandler } = useContext(UserContext);


    const loginInformation = (e) => {
        setUser(({ ...user, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        logInHandler(e, user);
    };


    return (
        <div className={style.loginContainer}>
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