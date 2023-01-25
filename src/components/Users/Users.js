import {useEffect, useState} from "react";
import {userService} from "../services";
import {logDOM} from "@testing-library/react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then({data} = console.log(data) )
    })

    return (
        <div>

        </div>
    );
};

export {Users};