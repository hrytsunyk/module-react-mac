import {carService} from "../../services";

const Car = ({car, setUpdate}) => {

    const {id, brand, price, year} = car;

    return (
        <div className={'car'}>

            <div><b>id:</b> {id}</div>
            <div><b>brand:</b> {brand}</div>
            <div><b>price:</b> {price}</div>
            <div><b>year:</b> {year}</div>

            <span>
                <button onClick={() => setUpdate(car)}>update</button>
                <button onClick={() => carService.deleteById(id)}>delete</button>
            </span>

        </div>
    );
};

export {Car};