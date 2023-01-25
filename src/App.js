
import {useEffect, useState} from "react";

import {userService} from "./components/services";

import {Users, UsersForm} from "./components";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(({data}) => setUsers([...data] ))
    }, [])

    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

        </div>
    );
};

export {App};