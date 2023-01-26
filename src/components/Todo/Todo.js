import css from "./Todo.module.css"

const Todo = ({todo}) => {

    const {id, title, completed} = todo;

    return (
        <div className={css.Todo}>
            <h4>id: {id}</h4>
            <h4>title:{title}</h4>
            <h4>completed:{completed.toString()}</h4>
        </div>
    );
};

export {Todo};