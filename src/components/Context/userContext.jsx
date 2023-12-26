import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService"

export const UserContext = createContext();

export const UserProvider = ({
    children
}) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const logInHandler = async (e, user) => {

        e.preventDefault();
        try {
            const accessToken = await userService.logIn(user);

            setUser(accessToken);

            navigate('/catalog');

        } catch (error) {
            alert(error);
        }

    };

    const logOutHandler = () => {
        setUser(null);
        navigate('/');
    }

    const contextValues = {
        logInHandler,
        logOutHandler,
        user: user,
    }

    return (
        <>
            <UserContext.Provider value={contextValues}>
                {children}
            </UserContext.Provider>
        </>
    )
}

