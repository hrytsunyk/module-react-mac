import css from "./RegisterPage.module.css";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators";
import {userService} from "../../services";
import {useState} from "react";


const RegisterPage = () => {
   const{register, handleSubmit, formState:{isValid} } = useForm({
       mode:'all', resolver:joiResolver(loginValidator)
   });

   const [error, setError] = useState();

   const create = async (user)=> {
       try {
       await userService.create(user)
       } catch (e) {
           setError(e.response.data)
       }
   }

    return (
        <div className={css.registerFather}>

            <form className={css.regBox} onSubmit={handleSubmit(create)}>
                <input type="text" placeholder={'username'} {...register('username')} />
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button disabled={!isValid}>Register</button>
            </form>


            <div>{ error?.username &&
                <div className={css.regError}>
                    {error.username}
                </div>
            }</div>
        </div>

    );
};

export {RegisterPage};