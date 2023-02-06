import {axiosService} from "./axiosService";
import {pathURL} from "../configs";

const userService = {
    getAll: ()=> axiosService.get(pathURL.users),
    getUserByID: (id)=> axiosService.get(`${pathURL.users}/${id}`),
    getPosts: ()=> axiosService.get(pathURL.posts),
    getPostsByID: (id)=> axiosService.get(`${pathURL.posts}/${id}`)
};

export {
    userService
}