import {useEffect, useState} from "react";
import {User} from "../User/User";
import {getService} from "../services/getService";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getService.getUsers().then(user => user.data)
            .then(user => setUsers([...user]))


    }, []);

    useEffect(() => {
        getService.getPostId().then(posts => posts.data).then(posts => setPosts([...posts]))
    },[])


    return (
        <div>
            <h3>User posts:</h3>
            {posts && <Posts key={posts.id} posts={posts}/>}
        <hr/>
            {users.map(user => <User key={user.id} user={user} setPosts={setPosts}/>)}
        </div>
    );
};

export {Users};