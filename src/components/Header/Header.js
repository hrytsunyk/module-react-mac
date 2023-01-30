import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}><h4></h4>HOME</NavLink>
            <NavLink to={'users'}><h4></h4>USERS</NavLink>
        </div>
    );
};

export {Header};