import { useState } from "react";
import style from "../CreateUser/CreateUser.module.css";

export const CreateUser = () => {

    const [userInfo, setUserInfo] = useState({
        full_name: "",
        username: "",
        email: "",
        disabled: "",
        isadmin: "",
    });

    const userInfoHandler = (e) => {
        setUserInfo(() => ({ ...userInfo, [e.target.name]: e.target.value }));
    };

    const onSubmitCreateUserForm = (e) => {
        e.preventDefault();

        console.log(userInfo);
    }



    return (
        <div className={style.createUserContainer}>
            <form onSubmit={onSubmitCreateUserForm}>
                <div className="mb-3">
                    <label htmlFor="1" className="form-label">Full name</label>
                    <input type="text" id="1" className="form-control" name="full_name" value={userInfo.full_name} onChange={userInfoHandler} autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="2" className="form-label">Username</label>
                    <input type="text" id="2" className="form-control" name="username" value={userInfo.username} onChange={userInfoHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="3" className="form-label">Email</label>
                    <input type="text" id="3" className="form-control" name="email" value={userInfo.email} onChange={userInfoHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="4" className="form-label">Disable</label>
                    <select class="form-select" id="4" name="disabled" value={userInfo.disabled}  onChange={userInfoHandler}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="5" className="form-label" >Admin</label>
                    <select class="form-select" id="5" name="isadmin" value={userInfo.isadmin}  onChange={userInfoHandler}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}