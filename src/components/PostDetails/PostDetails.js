import {useEffect, useState} from "react";

import {requestServ} from "../../services";
import css from "./PostDetails.module.css"


const PostDetails = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        requestServ.getPostByID(postId).then(({data}) => setPost(data))
    }, [postId])


    return (
        <div className={css.PostDetails}>

            {post &&

                <div>
                    <div>id: {post.id}</div>
                    <div>name: {post.title}</div>
                </div>
            }
        </div>
    );
};

export {PostDetails};