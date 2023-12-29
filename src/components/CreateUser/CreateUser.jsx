import { useContext, useState } from "react";

import style from "../CreateUser/CreateUser.module.css";
import * as userService from "../../services/userService";
import { UserContext } from "../Context/userContext";

export const CreateUser = () => {
    const { user } = useContext(UserContext);

    const [userInfo, setUserInfo] = useState({
        full_name: "",
        username: "",
        email: "",
        disabled: false,
        isadmin: false,
        hashed_password: "",
    });

    const userInfoHandler = (e) => {
        setUserInfo(() => ({ ...userInfo, [e.target.name]: e.target.value }));
    };

    const onSubmitCreateUserForm = async (e) => {

        e.preventDefault();

        try {
            await userService.createUser(user, userInfo)

        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className={style.createUserContainer}>
            <form onSubmit={onSubmitCreateUserForm}>
                <div className="mb-3">
                    <label htmlFor="1" className="form-label">Full name</label>
                    <input type="text" id="1" className="form-control" name="full_name" value={userInfo.full_name} onChange={userInfoHandler} autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="2" className="form-label">Username</label>
                    <input type="text" id="2" className="form-control" name="username" value={userInfo.username} onChange={userInfoHandler} autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="3" className="form-label">Email</label>
                    <input type="text" id="3" className="form-control" name="email" value={userInfo.email} onChange={userInfoHandler} autoComplete="true"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="3.1" className="form-label">Password</label>
                    <input type="text" id="3.1" className="form-control" name="hashed_password" value={userInfo.hashed_password} onChange={userInfoHandler} autoComplete="true"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="4" className="form-label">Disable</label>
                    <select className="form-select" id="4" name="disabled" value={userInfo.disabled} onChange={userInfoHandler}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="5" className="form-label" >Admin</label>
                    <select className="form-select" id="5" name="isadmin" value={userInfo.isadmin} onChange={userInfoHandler}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}