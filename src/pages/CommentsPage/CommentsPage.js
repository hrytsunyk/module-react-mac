import {Comments} from "../../components";

import css from "./CommentsPage.module.css"

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Comments/>
        </div>
    );
};

export {CommentsPage};