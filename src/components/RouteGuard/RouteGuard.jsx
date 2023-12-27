import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({
    children
}) => {

    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to='/' />
    }

    return (
        <>
            {children}
        </>
    );
}