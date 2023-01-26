import {useParams} from "react-router-dom";
import {PostDetails} from "../PostDetails/PostDetails";

const Post = ({post}) => {

    const {id, postId, name } = post;


    return (
        <div>
            <PostDetails/>
        </div>
    );
};

export {Post};