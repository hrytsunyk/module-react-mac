import {axiosService} from "./axiosService";
import {url} from "../configs";

const userService = axiosService.get(url.allUsers);

export {
    userService
}