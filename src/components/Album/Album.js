import css from "./Album.module.css"

const Album = ({album}) => {
    const {id, title } =album;

    return (
        <div className={css.Album}>
            <h4>id: {id} </h4>
            <h4>title: {title}</h4>
        </div>
    );
};

export {Album};