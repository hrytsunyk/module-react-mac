import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";

import css from "./AnimalsReducer.module.css";
import {useForm} from "react-hook-form";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            const [lastCat] = state.cats.slice(-1);
            const catsID = lastCat ? lastCat.id + 1 : 1;
            return{...state.cats, cats:[...state.cats, {id:catsID, name: action.payload}]};

        case "DELETE_CAT":
            const indexCAT = state.cats.indexOf(cat => cat.id === action.payload);
            return {...state};

        case "ADD_DOG":
            const [lastDog] = state.dogs.slice(-1);
            const dogsID = lastDog ? lastDog +1 : 1;
            return {...state, dogs:[...state.dogs, {id:dogsID, name: action.payload} ]};

        case "DELETE_DOG":
            const indexDOG = state.dogs.indexOf(dog => dog.id === action.payload);
            return {...state};

        default :
    }

}


const AnimalsReducer = () => {

const {register, reset, handleSubmit, formState:{isDirty}} = useForm();
const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=> data);

   const createDog = (data) => {
       dispatch({type:"ADD_DOG", payload: data});
       reset()
    }

   const createCat =(data)=> {
       dispatch({type:"ADD_CAT", payload:data})
       reset()
   }

    return (
        <div className={css.AnimalsReducer}>
            <form onSubmit={handleSubmit(createCat)}>
                <input type="text" placeholder={"add cat"} {...register('cats')}/>
                <button disabled={!isDirty}>Create Cat</button>
                <Cats/>
            </form>

            <form onSubmit={handleSubmit(createDog)}>
                <input type="text" placeholder={"add dog"} {...register("dogs")}/>
                <button disabled={!isDirty}>Create Dog</button>
                <Dogs/>
            </form>
        </div>
    );
};

export {AnimalsReducer};