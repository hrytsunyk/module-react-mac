import {FC, useEffect} from 'react';
import {ICar} from "../../interfaces";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {

    const {id, year, price, brand} = car;

    return (
        <div>
            <div>
                <h4>id:{id} | brand:{brand}</h4>
                <p><b>price: </b>{price}</p>
                <p><b>year: </b>{year}</p>
                <button>info</button>
            </div>
        </div>
    );
};

export {Car};

