import {useEffect, useState} from "react";
import axios from "axios";
import {userServices} from "../services/userServices";
import {User} from "../User/User";

const Users = () => {
    const [user,setUser] = useState([]);
    const [count,setCount] = useState(0);

    useEffect(() => {
        userServices.getAll()
            .then((user) => user.data)
            .then((user) => setUser([...user]))
    }, [count])
    return (
        <div>
            {user.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};