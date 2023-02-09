import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
import {useEffect} from "react";

const CarForm = () => {
    const dispatch = useDispatch();
  const {updatedCars} = useSelector(state => state.cars);

    const {register, handleSubmit, reset, formState:{isValid}, setValue} = useForm({
        mode:'all', resolver:joiResolver(carValidator)
    });

    useEffect(()=> {
        if (updatedCars){
            setValue('brand', updatedCars.brand, {shouldValidate:true})
            setValue('price', updatedCars.price, {shouldValidate:true})
            setValue('year', updatedCars.year, {shouldValidate:true})
        }
    },[updatedCars, setValue]);

    const update = async (car)=>{
        await dispatch(carActions.updateById({id:updatedCars.id, car}))
        reset()
    }



    const save = async (car)=> {
      await  dispatch(carActions.create({car}));
      reset()
        console.log(car)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(updatedCars? update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')} />
                <input type="text" placeholder={'year'} {...register('year')} />
                <input type="text" placeholder={'price'} {...register('price')} />
                <button disabled={!isValid}>{updatedCars? 'update': "create"}</button>
            </form>
        </div>
    );
};

export {CarForm};