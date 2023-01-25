import {axiosService} from "./axiosService";
import {url} from "../configs";

const userService = {
    getAll: ()=> axiosService.get(url.allUsers),
    createUser: (data)=> axiosService.post(url.allUsers, data)
}

export {
    userService
}