import {Comments, PostDetails} from "../../components";

import css from "./CommentsPage.module.css"
import {Posts} from "../../components/Posts/Posts";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div className={css.CommentsPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};