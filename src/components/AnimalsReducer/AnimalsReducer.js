import {useForm} from "react-hook-form";
import {useReducer} from "react";

import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";

import css from "./AnimalsReducer.module.css";


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            const [lastCat] = state.cats.slice(-1);
            const catsID = lastCat ? lastCat.id + 1 : 1;
            return {...state, cats: [...state.cats, {id: catsID, name: action.payload}]};

        case "DELETE_CAT":
            const indexCat = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(indexCat, 1)
            return {...state};

        case "ADD_DOG":
            const [lastDog] = state.dogs.slice(-1);
            const dogsID = lastDog ? lastDog.id + 1 : 1;
            return {...state, dogs: [...state.dogs, {id: dogsID, name: action.payload}]};

        case "DELETE_DOG":
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state};

        default :
            return {...state}
    }
}


const AnimalsReducer = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);
    const {register, reset, handleSubmit} = useForm();

    console.log(state.cats)

    const createDog = (data) => {
        const {dogs} = data;
        dispatch({type: "ADD_DOG", payload: dogs})
        reset()
    }

    const createCat = (data) => {
        const {cats} = data;
        dispatch({type: "ADD_CAT", payload: cats})
        reset()
    }

    return (
        <div className={css.AnimalsReducer} >
            <div>
                <form onSubmit={handleSubmit(createCat)}>
                    <input type="text" placeholder={"add cat"} {...register('cats')}/>
                    <button>Create Cat</button>
                </form>

                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                <form onSubmit={handleSubmit(createDog)}>
                    <input type="text" placeholder={"add dog"} {...register("dogs")}/>
                    <button>Create Dog</button>
                </form>

                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {AnimalsReducer};