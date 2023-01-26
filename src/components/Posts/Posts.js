// import {useState} from "react";
// import {requestServ} from "../../services";
// import {Post} from "../Post/Post";
//
// const Posts = () => {
//
//     const [posts, setPost] = useState([])
//
//
//     useState(() => {
//         requestServ.post().then(({data}) => setPost([...data]))
//     })
//
//
//     return (
//         <div>
//             {posts.map(post => <Post key={post.id} post={post}/>)}
//         </div>
//     );
// };
//
// export {Posts};