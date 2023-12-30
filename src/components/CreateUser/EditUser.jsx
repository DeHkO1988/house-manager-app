import { useParams } from "react-router-dom";
import style from "../CreateUser/CreateUser.module.css";
import * as userService from "../../services/userService";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/userContext"

export const EditUser = () => {
    const { userId } = useParams();
    const {user} = useContext(UserContext);

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        userService.getUserInfo()
    })




    return (
        <div className={style.createUserContainer}>
            <h3 className="text-center">Edit user</h3>
            <form onSubmit="">
                <div className="mb-3">
                    <label htmlFor="1" className="form-label">Full name</label>
                    <input type="text" id="1" className="form-control" name="full_name" value="" onChange="" autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="2" className="form-label">Username</label>
                    <input type="text" id="2" className="form-control" name="username" value="" onChange="" autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="3" className="form-label">Email</label>
                    <input type="text" id="3" className="form-control" name="email" value="" onChange="" autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="3.1" className="form-label">Password</label>
                    <input type="text" id="3.1" className="form-control" name="hashed_password" value="" onChange="" autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="4" className="form-label">Disable</label>
                    <select className="form-select" id="4" name="disabled" value="" onChange="">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="5" className="form-label" >Admin</label>
                    <select className="form-select" id="5" name="isadmin" value="" onChange="">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}