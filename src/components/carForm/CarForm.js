import {useForm} from "react-hook-form";
import {carValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";

const CarForm = () => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)});

    return (
        <form className={'inputs'}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type="text" placeholder={'price'} {...register('price')} />
            {errors.price && <div>{errors.price.message}</div>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}


            <button>update</button>
        </form>
    );
};

export {CarForm};