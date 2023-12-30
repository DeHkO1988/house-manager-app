import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService"

export const UserContext = createContext();

export const UserProvider = ({
    children
}) => {

    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [loginErr, setLoginErr] = useState({});
    const navigate = useNavigate();

    const logInHandler = async (e, user) => {

        e.preventDefault();
        try {
            const accessToken = await userService.logIn(user);

            setUser(accessToken);

            const a = await userService.getUserInfo(accessToken);

            await setUserInfo(a);

            navigate('/catalog');

        } catch (error) {

            setLoginErr({err: error})

        }

    };

    const logOutHandler = () => {
        setUser(null);
        setUserInfo(null)
        navigate('/');
    };

    const errorCleaner = () => {
        setLoginErr({});
    };

    const contextValues = {
        logInHandler,
        logOutHandler,
        errorCleaner,
        user: user,
        userInfo: userInfo,
        error: loginErr,
    }

    return (
        <>
            <UserContext.Provider value={contextValues}>
                {children}
            </UserContext.Provider>
        </>
    )
}

