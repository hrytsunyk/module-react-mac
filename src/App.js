import {Posts} from "./components/Posts/Posts";
import {PostForm} from "./components/PostForm";
import {useEffect, useState} from "react";
import {postService} from "./services";

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        postService.allPosts().then(({data}) => setPosts([...data]));
    }, [])

    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {App};