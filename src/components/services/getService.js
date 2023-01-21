import {getAPI} from "./getAPI";

const getService = {
    getUsers: () => getAPI.get('/users'),
    getPosts: () => getAPI.get('/posts'),
};

export {getService};