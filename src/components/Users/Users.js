import {useEffect, useState} from "react";
import {axiosService, usersServices} from "../../services";
import {User} from "../User/User";
import {Inputs} from "../Inputs";

import css from "./Users.module.css";


const Users = ({users, setNewUser}) => {


    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user} setNewUseer={setNewUser}/>)}
        </div>
    );
};

export {Users};