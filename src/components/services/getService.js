import {getAPI} from "./getAPI";

const getService = {
    getUsers: () => getAPI.get('/users'),
    getPosts: () => getAPI.get('/posts'),
    getPostId: (userId) => getAPI.get(`/user/${userId}/posts`)
};

export {getService};