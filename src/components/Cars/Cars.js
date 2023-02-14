import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import css from "./Cars.module.css";
import {useSearchParams} from "react-router-dom";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars,prev, next} = useSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.allCars({page: query.get('page')}))
    }, [dispatch,query]);


    return (

        <div>
                <div className={css.buttons}>
                    <button disabled={!prev} onClick={() => setQuery(query => (
                        {page: +query.get('page') - 1}))}
                    >prev</button>

                    <button disabled={!next} onClick={() => setQuery(query => ({
                        page: +query.get('page') + 1}))}
                    >next</button>

                </div>
            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};