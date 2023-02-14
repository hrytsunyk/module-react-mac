import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {joiResolver} from "@hookform/resolvers/joi";


import {carActions} from "../../redux";
import {carValidator} from "../../validators";


const CarForm = () => {

    const dispatch = useDispatch();

    const {updatedCars} = useSelector(state => state.cars);

    const {register, handleSubmit, formState: {isValid}, setValue} = useForm({
        mode: 'all', resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updatedCars) {
            setValue('brand', updatedCars.brand, {shouldValidate: true})
            setValue('price', updatedCars.price, {shouldValidate: true})
            setValue('year', updatedCars.year, {shouldValidate: true})
        }
    }, [updatedCars]);


    const update = async (car) => {
        await dispatch(carActions.updateById({id: updatedCars.id, car}))


    }
    const save = async (car) => {
        await dispatch(carActions.create({car}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(updatedCars ? update : save)}>

                <input type="text" placeholder={'brand'} {...register('brand')} />
                <input type="text" placeholder={'year'} {...register('year')} />
                <input type="text" placeholder={'price'} {...register('price')} />

                <button disabled={!isValid}>{updatedCars ? 'update' : "create"}</button>

            </form>
        </div>
    );
};

export {CarForm};