import {useSelector} from "react-redux";
import css from "../../App.module.css";
import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars)

    return (
        <div className={css.father}>
            <CarForm/>
            {loading && <h2>LOADING.......</h2>}
            <hr/>
            <Cars/>
        </div>
    );
}

export {CarsPage};