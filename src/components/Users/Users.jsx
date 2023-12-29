import { useContext, useEffect, useState } from "react";

import * as userService from "../../services/userService";
import { UserContext } from "../Context/userContext";


export const Users = () => {
    const [users, setUsers] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        userService.getAllUsers(user)
            .then(result => setUsers(result.users));
    }, []);

    return (
        <>
            <div className="container text-center">

                {users.map(x => {
                    return (

                        <div className="p-2" key={x.email}>

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{x.full_name}</h5>
                                    <p className="card-text"><b>Username:</b> {x.username}</p>
                                    <p className="card-text"><b>Email:</b> {x.email}</p>
                                    <p className="card-text"><b>Disable:</b> {x.disable ? "TRUE" : "FALSE"}</p>
                                    <p className="card-text"><b>Admin:</b> {x.isadmin ? "TRUE" : "FALSE"}</p>

                                    <div className="btn-group me-2">
                                        <a href="#" className="btn btn-primary">Edit</a>
                                    </div>
                                    <div className="btn-group me-2">
                                        <a href="#" className="btn btn-danger">Delete</a>
                                    </div>

                                </div>
                            </div>

                        </div>

                    )
                })}

                <div className="btn-toolbar">
                    <div className="btn-group mx-auto">
                        <a href="#" className="btn btn-primary">Add new user</a>
                    </div>
                </div>

            </div>
        </>
    )
}