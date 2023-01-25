import {axiosService} from "./axiosService";
import {url} from "../configs";

const userService = {
    getAll: ()=> axiosService.get(url.allUsers)
}

export {
    userService
}