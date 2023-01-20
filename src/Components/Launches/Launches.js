import {useEffect, useState} from "react";

import {getAll} from "../services";

import {Launch} from "../Launch/Launch";



const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        getAll.then(launches => launches.data).then(launches => setLaunches([...launches]))
    }, [])

    return (
        <div className={'father'}>

            {launches.filter(launches => launches.launch_year !== '2020')
                .map(launch => <Launch key={launch.flight_number} launch={launch}/>)}

        </div>
    );
};

export {Launches};