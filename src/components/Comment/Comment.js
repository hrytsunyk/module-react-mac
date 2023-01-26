import css from "./Comment.module.css"


const Comment = ({comment}) => {

    const {id, name, postId} = comment;
    console.log(comment);

    return (

            <form className={css.Comment}>
                <h4>postId: {[postId]} | id: {id}</h4>
                <h4>name: {[name]}</h4>
                <button>see post</button>
            </form>

    );
};

export {Comment};