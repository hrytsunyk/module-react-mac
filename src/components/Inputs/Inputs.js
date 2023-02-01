import {useForm} from "react-hook-form";
import {usersServices} from "../../services";
import {useEffect} from "react";

const Inputs = ({setUsers, newUser }) => {

    const {register, handleSubmit, getValues, reset} = useForm()

    useEffect(()=> {

        if (newUser) {
            getValues('name', newUser.name )
            getValues('city', newUser.city )
            getValues('street', newUser.street )
        }
    })

    const submit = async (dataInput) => {
        const {data} = await usersServices.create(dataInput);
        setUsers(prev => [...prev, data])
        reset()
    }

    return (

            <form onSubmit={handleSubmit(submit)}>

                <input placeholder={'name'} {...register('name')} />
                <input placeholder={'city'} {...register('city')}/>
                <input placeholder={'street'} {...register('street')}/>

                <button>save</button>
            </form>

    );
};

export {Inputs};