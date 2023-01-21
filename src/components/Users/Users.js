import {useEffect, useState} from "react";
import {User} from "../User/User";
import {getService} from "../services/getService";
import {Posts} from "../Posts/Posts";
import {post} from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);

    const [userId, setUserId] = useState(null);

    const [posts, setPosts] = useState([])


    useEffect(() => {
        getService.getUsers().then(user => user.data)
            .then(user => setUsers([...user]))


    }, []);

    useEffect(() => {
        getService.getPosts().then(posts => posts.data).then(posts => setPosts([...posts]))
    },[])

    console.log(userId);

    return (
        <div>
            {posts.map(post => <Posts key={post.id} posts={post}/>)}
            <h3>User posts:</h3>
        <hr/>
            {users.map(user => <User key={user.id} user={user} onSelectUser={setUserId}/>)}
        </div>
    );
};

export {Users};