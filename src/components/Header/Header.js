import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {authService, axiosService, userService} from "../../services";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux/slices/userSlice";

const Header = () => {

    const dispatch = useDispatch();
   const{user} = useSelector(state => state.user)
    console.log(user)
    useEffect(() => {
        dispatch(userAction.myData())
    })

    return (
        <div className={css.Header}>

            {<div className={css.LoginRegisterH4}>
                <NavLink to={'login'}><h4>Login</h4></NavLink>
                <NavLink to={'register'}><h4>Register</h4></NavLink>
            </div>}

        </div>
    );
};

export {Header};