import {NavLink} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/home'}><h3>Home</h3></NavLink>
            <NavLink to={'/cats&dogs'}><h3>Dogs</h3></NavLink>
         </div>
    );
};

export {Header};