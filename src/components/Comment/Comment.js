import css from "./Comment.module.css"

import {Link} from "react-router-dom";


const Comment = ({comment}) => {

    const {id, name, postId} = comment;


    return (

        <form className={css.Comment}>

            <div className={css.titleBlock}>
                <h4>postId: {[postId]} | id: {id}</h4>
                <h4>name: {[name]}</h4>
            </div>

            <Link to={postId.toString()}>
                <button>post</button>
            </Link>

        </form>

    );
};

export {Comment};