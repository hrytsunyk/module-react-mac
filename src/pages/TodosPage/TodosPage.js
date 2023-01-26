import {Todos} from "../../components";

import css from "./TodosPage.module.css";



const TodosPage = () => {

    return (
        <div className={css.TodosPage}>

            <Todos/>

        </div>
    );
};

export {TodosPage};