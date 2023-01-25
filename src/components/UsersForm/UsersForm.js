import {useForm} from "react-hook-form";
import {userService} from "../services";

const UsersForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, getValues} = useForm()


    const submit = async (data) => {

        await userService.createUser(data)
             .then(({data}) => setUsers((prevState) => [...prevState, data]))
              reset();

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>new user</button>
        </form>
    );
};

export {UsersForm};