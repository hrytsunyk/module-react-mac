import {Cat} from "../Cat/Cat";

const Cats = ({cats}) => {

    // console.log(cats)

    return (
        <div>
            {cats.map(cat => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};