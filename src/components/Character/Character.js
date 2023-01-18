import {Characters} from "../Characters/Characters";

const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div className={'character-card'}>
            <div className={'image'}>
                <img src={image} alt={name}/>
            </div>
            <div className={'about'}>
                <h4>{id}. Name: {name} | Gender: {gender}</h4>
                <h5>Status: {status} | Species: {species}</h5>
            </div>
        </div>
    );
};

export {Character};