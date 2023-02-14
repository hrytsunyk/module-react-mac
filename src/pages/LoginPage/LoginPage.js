import css from "./LoginPage.module.css"
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const{register, handleSubmit, formState:{isValid}}=useForm({
        mode:'all',
        resolver: joiResolver(loginValidator)
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const login = async (dataToken) => {
        try {
          await authService.login(dataToken)
            navigate('/cars')

        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }
    }


    return (
        <div className={css.LoginFather}>

                <form className={css.loginBox} onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'username'} {...register('username')} />
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button disabled={!isValid}>Login</button>
                </form>


            <div>{ error?.detail &&
                <div className={css.loginError}>
                    {error.detail}
                </div>
            }</div>
        </div>

    );
};

export {LoginPage};