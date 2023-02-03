import {Dog} from "../Dog/Dog";

const Dogs = ({dogs}) => {
    console.log(dogs)
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};