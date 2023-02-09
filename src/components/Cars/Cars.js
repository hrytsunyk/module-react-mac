import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import css from "./Cars.module.css";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.allCars())
    }, [dispatch])


    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};