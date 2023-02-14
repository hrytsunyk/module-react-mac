import {axiosService} from "./axiosService";
import {urls} from "../config";

const userService = {
   create :(user)=> axiosService.post(urls.user, user)
}

export {
    userService
}