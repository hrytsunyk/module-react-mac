import {CarForm, Cars} from "./components";

import css from "./App.module.css";
import {useSelector} from "react-redux";

const App = () => {

     const {loading} =useSelector(state => state.cars)

    return (
        <div className={css.father}>
            <CarForm/>
            {loading && <h2>LOADING.......</h2>}
            <hr/>
            <Cars/>
        </div>
    );
};

export {App};