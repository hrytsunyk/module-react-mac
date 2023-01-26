import {useEffect, useState} from "react";

import {Todo} from "../Todo/Todo";
import {requestServ} from "../../services";

import css from "./Todos.module.css"


const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        requestServ.todo().then(({data}) => setTodos([...data]))
    })

    return (

        <div className={css.Todos}>

            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}

        </div>
    );
};

export {Todos};