import {Car} from "../Car/Car";

const Cars = ({cars, setUpdate}) => {


    return (
        <div className={'cars'}>

            {cars.map(car => <Car key={car.id} car={car} setUpdate={setUpdate}/>)}

        </div>
    );
};

export {Cars};