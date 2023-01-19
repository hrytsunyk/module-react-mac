import {useEffect, useState} from "react";
import {getApi} from "../services/getApi";
import {getValue} from "@testing-library/user-event/dist/utils";
import {getAll} from "../services/getAll";
import axios from "axios";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([])
    const [count, setCount] = useState(0)

useEffect(()=> {
    getAll.then(launches => launches.data).then(launches => setLaunches([...launches]))
    }, [count])
    return (
        <div>
            {launches.map((launch,index) => console.log(launch))}
        </div>
    );
};

export {Launches};