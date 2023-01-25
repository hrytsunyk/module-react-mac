import {CarForm, Cars} from "./components";

import {useEffect, useState} from "react";

import {carService} from "./services";



const App = () => {

    const [cars, setCars] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]));
    })

    return (
        <div className={'father'}>

            <CarForm setCars={setCars} update={update}/>
            <hr/>
            <Cars cars={cars} setUpdate={setUpdate}/>

        </div>
    );
};

export {App};