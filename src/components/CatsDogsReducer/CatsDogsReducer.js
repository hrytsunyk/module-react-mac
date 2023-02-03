import {useReducer, useRef} from "react";

import css from "./CatsDogsReducer.module.css";
import {Cats} from "../Сats/Cats";
import {Dogs} from "../Dogs/Dogs";
import {useForm} from "react-hook-form";


const reducer = (state, action) => {
     switch (action.type){
         case 'ADD_CAT':
             const[lastCat] = state.cats.slice(-1);
             const idCat = lastCat ? lastCat.id + 1 : 0;
             return {...state, cats: [...state.cats, {id: idCat, name: action.payload}]};

         case "DELETE_CAT":
            const indexCat = state.cats.findIndex(cat => cat.id === action.payload);
             state.cats.splice(indexCat, 1);
             return {...state}

         case "ADD_DOG":
             const [lastDog] = state.dogs.slice(-1);
             const idDog = lastDog ? lastDog.id + 1 : 0;
             return {...state, dogs:[...state.dogs, {id: idDog, name: action.payload}]};

         case "DELETE_DOG":
             const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
             state.dogs.splice(indexDog, 1);
             return {...state}

         default:
             return {...state}



     }
}


const CatsDogsReducer = () => {

    const refCats = useRef();
    const refDogs = useRef();

   const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=> data)


    function createCat() {
       dispatch({type:'ADD_CAT', payload: refCats.current.value});
       refCats.current.value='';
    }

    function createDog() {
        dispatch({type:'ADD_DOG', payload: refDogs.current.value});
        refDogs.current.value='';
    }


    return (
        <div>
            <div className={css.CatsDogsReducer}>
                <div>
                    <input type="text" ref={refCats}/>
                    <button onClick={createCat} >Create Cat</button>
                    <Cats cats={state.cats} />
                </div>

                <div>
                    <input type="text" ref={refDogs}/>
                    <button onClick={createDog}>Create Dog</button>
                    <Dogs dogs={state.dogs}/>
                </div>
            </div>
        </div>
    );
};

export {CatsDogsReducer};