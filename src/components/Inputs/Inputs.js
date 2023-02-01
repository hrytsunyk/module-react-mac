import {useForm} from "react-hook-form";
import {usersServices} from "../../services";
import {useEffect} from "react";

const Inputs = ({setUsers, update }) => {

    const {register, handleSubmit, getValues, reset} = useForm()

    useEffect(()=> {

        if (update) {
            getValues('name', update.name )
            getValues('city', update.city )
            getValues('street', update.street )
        }
    })

    const submit = async (dataInput) => {
        const {data} = await usersServices.create(dataInput);
        setUsers(prevState => [...prevState, data])
        reset()
    }

    return (

            <form onSubmit={handleSubmit(submit)}>

                <input placeholder={'name'} {...register('name')} />
                <input placeholder={'city'} {...register('city')}/>
                <input placeholder={'street'} {...register('street')}/>

                <button>{update ? 'update' : "save"}</button>
            </form>

    );
};

export {Inputs};