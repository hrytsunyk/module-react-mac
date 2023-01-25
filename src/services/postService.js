import {axiosService} from "./axiosService";
import {urlPost} from "../components/apiURLS";

const postService = {
    allPosts: ()=> axiosService.get(urlPost.comments),
    newPost: (data) => axiosService.post(data)
}

export {
    postService
}