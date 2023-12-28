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
            {users.map(x => {
                return (
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">{x.username}</li>
                        <li class="list-group-item">{x.full_name}</li>
                        <li class="list-group-item">{x.email}</li>
                        <li class="list-group-item">Disable: {x.disable ? "TRUE" : "FALSE"}</li>
                        <li class="list-group-item">Admin: {x.isadmin ? "TRUE" : "FALSE"}</li>
                        <li class="list-group-item">
                            <button type="button" class="btn btn-primary">Edit</button>
                        </li>
                        <li class="list-group-item">
                            <button type="button" class="btn btn-primary">Delete</button>
                        </li>
                    </ul>
                )
            })}

            <button type="button" class="btn btn-primary">ADD new User</button>
        </>
    )
}