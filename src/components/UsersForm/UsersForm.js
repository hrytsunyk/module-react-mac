import {putForm} from "axios";
import {useForm} from "react-hook-form";

const UsersForm = () => {

    const {register, handleSubmit, watch, formState:{errors, isValid}, getValues}= useForm()


    function submit() {

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name')}/>
            <button>new user</button>
        </form>
    );
};

export {UsersForm};