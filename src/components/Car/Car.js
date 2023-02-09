import css from "./Car.module.css";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useDispatch();


    return (
        <div className={css.Car}>

            <div>{id}.{brand}</div>
            <div>year:{year} | price:{price}</div>

            <div className={css.buttons}>
                <button onClick={()=> dispatch(carActions.setForUpdateCars(car))} >update</button>
                <button onClick={()=> dispatch(carActions.deleteCar({id}))}>delete</button>
            </div>
        </div>
    );
};

export {Car};