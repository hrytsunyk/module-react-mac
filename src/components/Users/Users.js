import {User} from "../User/User";

import css from "./Users.module.css";


const Users = ({users, setUpdate}) => {


    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user} setUpdate={setUpdate}/>)}
        </div>
    );
};

export {Users};