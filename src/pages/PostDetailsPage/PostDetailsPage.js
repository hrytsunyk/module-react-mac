import {useParams} from "react-router-dom";
import {PostDetails} from "../../components";

const PostDetailsPage = () => {

    const {postId} = useParams()

    console.log(postId)
    return (
        <div>
            <PostDetails postId={postId}/>
        </div>
    );
};

export {PostDetailsPage};