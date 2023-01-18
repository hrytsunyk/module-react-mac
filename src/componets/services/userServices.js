import {axiosService} from "./axiosService";

const userServices = {
    getAll: () => axiosService.get('/users'),
    getID: (id) => axiosService.get('/users/${id}')
}

export {userServices};