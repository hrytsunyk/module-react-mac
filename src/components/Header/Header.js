import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'home'}><h3>HOME</h3></NavLink>
            <NavLink to={'users'}><h3>USERS</h3></NavLink>
            <NavLink to={'about'}><h3>ABOUT</h3></NavLink>
        </div>
    );
};

export {Header};