import {axiosService} from "./axiosService";
import {apiURL} from "../apiURLs";

const usersServices = {
    getAll: ()=> axiosService.get(apiURL.users),
    create: (newUser)=> axiosService.post(apiURL.users, newUser),
    updateById:(id, data)=> axiosService.put(`${apiURL.users}/${id}`, data),
    deleteById:(id)=> axiosService.delete(`${apiURL.users}/${id}`)
};

export {
    usersServices
};