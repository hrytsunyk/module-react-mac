import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {requestServ} from "../../services";

const PostDetails = ({postId}) => {

    const [post, setPost] = useState([])



    useEffect(() => {
        requestServ.getPostByID(postId).then(({data}) => setPost([...data]))
    })
    return (
        <div>
            {post &&
                <PostDetails/>

            }
        </div>
    );
};

export {PostDetails};