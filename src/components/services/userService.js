import {axiosService} from "./axiosService";
import {url} from "../configs";

const userService = axiosService(url);

export {
    userService
}