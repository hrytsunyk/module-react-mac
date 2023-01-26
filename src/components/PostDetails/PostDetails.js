import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {requestServ} from "../../services";

const PostDetails = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(()=> {
        requestServ.getPostByID(postId).then(({data}) => setPost(data))
    }, [postId])

    console.log(post);
    return (
        <div>
            {post &&
                <>

                    <div>
                        <div>id: {post.id}</div>
                        <div>name: {post.title}</div>
                    </div>

                </>

            }
        </div>
    );
};

export {PostDetails};