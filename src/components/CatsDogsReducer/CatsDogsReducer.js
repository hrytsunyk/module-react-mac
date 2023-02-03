import {useRef} from "react";


const CatsDogsReducer = () => {

    const refCats = useRef();
    const refDogs = useRef();

    function createCat() {

    }

    function createDog() {

    }

    return (
        <div>
            <div>
                <input type="text" ref={refCats}/>
                <button onClick={createCat}>Create Cat</button>
            </div>

            <div>
                <input type="text" ref={refDogs}/>
                <button onClick={createDog}>Create Dog</button>
            </div>
        </div>
    );
};

export {CatsDogsReducer};