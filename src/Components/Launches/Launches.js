import {useEffect} from "react";
import {getApi} from "../services/getApi";
import {getValue} from "@testing-library/user-event/dist/utils";

const Launches = () => {

useEffect(()=> {

    getApi().then(value => console.log(value.data)).then(value => console.log(value))
})

    return (
        <div>
            Launches
        </div>
    );
};

export {Launches};