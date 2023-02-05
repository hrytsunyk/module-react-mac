import {useForm} from "react-hook-form";

import css from "./LoginPage.module.css";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {

   const {register, handleSubmit, reset, formState:{isValid,errors}} =  useForm()
   const navigate = useNavigate();
   const {state} = useLocation();
   const {logIn} = useAuthContext();

    const login =(data)=> {
        const {username,password} = data;
        logIn(username, password)
        navigate(state.pathname, {replace: true})
        console.log(data)

    }

    return (
        <div className={css.LoginPage}>
            <div className={css.form}>
                <form onSubmit={handleSubmit(login)}>
                    <div>
                        <div><input type="text" placeholder={'Username'} {...register('username')}/></div>
                        <div><input type="text" placeholder={'Password'} {...register('password')}/></div>
                    </div>
                    <button className={css.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export {LoginPage};