import {axiosServ} from "./index";
import {urlJS} from "../apiURLs";

const requestServ = {

    album: ()=> axiosServ.get(urlJS.albums),
    todo: ()=> axiosServ.get(urlJS.todos),
    comments: ()=> axiosServ.get(urlJS.comments)
}

export {
    requestServ
};