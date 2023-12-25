import { useContext, useEffect, useState } from "react";

import { UserContext } from "../Context/userContext";
import * as userService from "../../services/userService";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        userService.getUserInfo(user)
            .then(result => setUserInfo(result))
            .catch(err => navigate('/login'))
    }, [user]);

    return (
        <>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username: {userInfo.username}</li>
                    <li className="list-group-item">Email: {userInfo.email}</li>
                    <li className="list-group-item">Full name: {userInfo.full_name}</li>
                    {userInfo.isadmin ?
                        <li className="list-group-item">Status: ADMIN</li>
                        :
                        <li className="list-group-item">Status: Regular</li>
                    }
                </ul>
            </div>
        </>
    )
}