import {Users} from "../../components/Users/Users";
import {Inputs} from "../../components/Inputs";

import css from "./UserPage.module.css";
import {useEffect, useState} from "react";
import {usersServices} from "../../services";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    const [newUser,setNewUser] = useState(null);


    useEffect(() => {
        usersServices.getAll().then(({data}) => setUsers([...data]))
    }, [])


    return (
        <div className={css.UserPage}>
            <Inputs newUser={newUser} setUsers={setUsers} />
            <Users users={users} setNewUser={setNewUser}/>
        </div>
    );
};

export {UsersPage};