import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}><h4>HOME</h4></NavLink>
            <NavLink to={'users'}><h4>USERS</h4></NavLink>
        </div>
    );
};

export {Header};