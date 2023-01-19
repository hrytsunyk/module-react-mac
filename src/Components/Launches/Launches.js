import {useEffect, useState} from "react";
import {getApi} from "../services/getApi";
import {getValue} from "@testing-library/user-event/dist/utils";
import {getAll} from "../services/getAll";

const Launches = () => {

    const [launches, setLaunches] = useState([])
    const [count, setCount] = useState(0)

useEffect(()=> {
    getAll.then(value => value.).then(value => setLaunches([...value]) );
}, [count])

    return (
        <div>
            Launches
        </div>
    );
};

export {Launches};