import css from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const{user}=useAuthContext()
    const {logOut}= useAuthContext()

    return (
        <div className={css.Header}>
            <NavLink to={'home'}><h3>HOME</h3></NavLink>
            <NavLink to={'users'}><h3>USERS</h3></NavLink>
            <NavLink to={'about'}><h3>ABOUT</h3></NavLink>
            {user && <div className={css.iconButton}>
                <div className={css.iconName}>{user[0]}</div>
                <button onClick={logOut}>logout</button>
                     </div>}
        </div>
    );
};

export {Header};