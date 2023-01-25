import {useForm} from "react-hook-form";
import {carValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, update}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "all", resolver: joiResolver(carValidator)
    });

    useEffect(() => {

        if (update) {
            setValue('brand', update.brand)
            setValue('price', update.price)
            setValue('year', update.year)
        }

    }, [update])

    const submit = async (inputsData) => {
        const {data} = await carService.create(inputsData);
        setCars(prev => [...prev, data])
        reset()
    };

    const updateCar = async (car) => {
        const {data} = await carService.updateById(update.id, car);
        reset()

    };

    const deleteCar = async (car) => {
        await carService.deleteById(update.id);

    };

    return (

        <form className={'inputs'} onSubmit={
            handleSubmit(update ? updateCar : submit)
        }>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'year'} {...register('year')}/>

            {errors.year && <div>{errors.year.message}</div>}
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}


            <button disabled={!isValid}>{update ? 'update' : 'create'}</button>
        </form>
    );
};

export {CarForm};