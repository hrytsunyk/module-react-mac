import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            "id": 3,
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            "id": 4,
            "name": "Beth Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },
        {
            "id": 5,
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male","image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        },
        {
            "id": 6,
            "name": "Abadango Cluster Princess",
            "status": "Alive",
            "species": "Alien",
            "type": "",
            "gender": "Female",
            
        }

    ]
    return (
        <div>
            Characters
        </div>
    );
};

export {Characters};