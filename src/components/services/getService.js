import {getAPI} from "./getAPI";

const getService = {
    getUsers: () => getAPI.get('/users'),
    getPosts: () => getAPI.get('/posts'),
    getPostId: (id) => getAPI.get(`/user/${id}/posts`)
};

export {getService};