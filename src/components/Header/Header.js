import css from './Header.module.css'
import {Navigate, NavLink} from "react-router-dom";
const Header = () => {


    return (
        <div className={css.Header}>
            <div className={css.LoginRegisterH4} >
                <NavLink to={'login'}><h4>Login</h4></NavLink>
                <NavLink to={'register'}><h4>Register</h4></NavLink>
            </div>
        </div>
    );
};

export {Header};