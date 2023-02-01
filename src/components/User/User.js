
import css from './User.module.css';
import {usersServices} from "../../services";

const User = ({user, setNewUser}) => {

    const {id, name, address:{city, street}} = user;



    return (

            <div className={css.User}>
                <h4>{id}. {name}</h4>
                <h4>{city} - {street}</h4>

                <div>
                    <button onClick={()=>setNewUser}>update</button>
                    <button onClick={()=> usersServices.deleteById(id)}>delete</button>
                </div>

            </div>
    );
};

export {User};