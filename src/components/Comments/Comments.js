import {useState} from "react";

import {Comment} from "../Comment/Comment";
import {requestServ} from "../../services";

import css from "./Comments.module.css"



const Comments = () => {

    const [comments, setComments] = useState([]);

    useState(() => {
        requestServ.comments().then(({data}) => setComments([...data]))
    })

    return (
        <div className={css.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};