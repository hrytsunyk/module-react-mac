import {useEffect, useState} from "react";
import {axiosService, usersServices} from "../../services";
import {User} from "../User/User";
import {Inputs} from "../Inputs";

const GetUser = () => {

    const [users, setUsers] = useState([]);

    const [newUser,setNewUser] = useState(null);


    useEffect(() => {
        usersServices.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
            {<Inputs setUsers={setUsers} newUser={newUser}/>}
        </div>
    );
};

export {GetUser};