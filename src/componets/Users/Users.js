import {useEffect, useState} from "react";

import {userServices} from "../services";
import {UserAddress} from "../User/UserAddress";
import {User} from "../User/User";



const Users = () => {

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    const [address, setAddress] = useState(null);


    useEffect(()=>{
            userServices.getAll().then(user => user.data).then(user => setUsers([...user]))
        }, [count]);

    return (

        <div>
            <h2>Address info:</h2>
            <div>{address && <UserAddress user={address}/>}</div>
            <hr/>
            {users.map(user => <User key={user.id} user={user} setAddress={setAddress}/>)}
        </div>
    );
};

export {Users};