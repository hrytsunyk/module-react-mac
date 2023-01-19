import {useEffect, useState} from "react";
import {getApi} from "../services/getApi";
import {getValue} from "@testing-library/user-event/dist/utils";
import {getAll} from "../services/getAll";
import axios from "axios";

const Launches = () => {

    const [launches, setLaunches] = useState([])
    const [count, setCount] = useState(0)

useEffect(()=> {

    }, [count])

    return (
        <div>
            Launches
        </div>
    );
};

export {Launches};