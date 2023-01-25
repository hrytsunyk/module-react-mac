import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value} />)}
        </div>
    );
};

export {Posts};