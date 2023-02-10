import css from "./LoginPage.module.css"
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const LoginPage = () => {

    const{register, reset, handleSubmit, formState:{isValid, errors}}=useForm({
        mode:'all',
        resolver: joiResolver()
    })


    function login() {

    }

    return (
        <div className={css.LoginFather}>
                <form className={css.loginBox} onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'username'} {...register('username')} />
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>Login</button>
                </form>
        </div>
    );
};

export {LoginPage};